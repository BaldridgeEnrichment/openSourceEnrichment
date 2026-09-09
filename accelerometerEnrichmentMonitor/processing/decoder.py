import sys
from datetime import datetime, timedelta

def get_signed_int16(val):
    """Convert unsigned int to signed int16"""
    return val - 0x10000 if val >= 0x8000 else val

def decode_frame(data):
    """Decode a single 11-byte frame"""
    if len(data) != 11 or data[0] != 0x55:
        return None

    frame_type = data[1]
    vals = [get_signed_int16(data[i+1] << 8 | data[i]) for i in range(2, 8, 2)]

    if frame_type == 0x51:  # Accelerometer
        return [v / 32768 * 16 for v in vals]
    elif frame_type == 0x52:  # Gyroscope
        return [v / 32768 * 2000 for v in vals]
    elif frame_type == 0x53:  # Angle
        return [v / 32768 * 180 for v in vals]
    elif frame_type == 0x54:  # Magnetometer
        return [v / 120 for v in vals]
    else:
        return None

def decode_file(filename, output_filename, start_time = "00:00:00", hertz = 0.2):
    start_time_obj = datetime.strptime(start_time, "%H:%M:%S")
    time_delta = timedelta(seconds=1 / float(hertz))  # Calculate the time step between each reading

    with open(filename, 'rb') as f:
        raw = f.read()

    # Look for all valid 11-byte frames that start with 0x55
    i = 0
    frames = []
    while i < len(raw) - 11:
        if raw[i] == 0x55:
            frame = raw[i:i+11]
            if len(frame) == 11:
                frames.append(frame)
                i += 11
            else:
                i += 1
        else:
            i += 1

    # Group into sets of 4 (Acc, Gyro, Angle, Mag)
    with open(output_filename, 'w') as out:
        out.write("Timestamp\tAccX(g)\tAccY(g)\tAccZ(g)\tGyrX(DegPerSec)\tGyrY(DegPerSec)\tGyrZ(DegPerSec)\tAngX(Deg)\tAngY(Deg)\tAngZ(Deg)\tMagX(microtesla)\tMagY(microtesla)\tMagZ(microtesla)\n")
        current_time = start_time_obj
        for j in range(0, len(frames) - 3, 4):
            group = frames[j:j+4]
            decoded = []
            for frame in group:
                vals = decode_frame(frame)
                if vals:
                    decoded.extend([round(v, 3) for v in vals])
            if len(decoded) == 12:
                timestamp = current_time.strftime("%H:%M:%S")
                out.write(f"{timestamp}\t" + '\t'.join(map(str, decoded)) + '\n')
                current_time += time_delta  # Increment the timestamp by the time delta

if __name__ == "__main__":
    if len(sys.argv) == 2:
        output_path = sys.argv[1].rsplit('.', 1)[0] + "_decoded.tsv"
        decode_file(sys.argv[1], output_path)
    elif len(sys.argv) == 3:
        output_path = sys.argv[1].rsplit('.', 1)[0] + "_decoded.tsv"
        decode_file(sys.argv[1], output_path, sys.argv[2],)
    elif len(sys.argv) == 4:
        output_path = sys.argv[1].rsplit('.', 1)[0] + "_decoded.tsv"
        decode_file(sys.argv[1], output_path, sys.argv[2])
    else:    
        input_path = input("Enter path to binary data file: ")
        start_time = input("Enter the start time of the recording (HH:MM:SS): ")
        hertz = float(input("Enter the Hertz (sampling frequency) of the recording: "))
        output_path = input_path.rsplit('.', 1)[0] + "_decoded.tsv"
        decode_file(input_path, output_path, start_time, hertz)
    print(f"Decoded data saved to: {output_path}")

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useRef, useState, type ChangeEvent, type KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRef = useRef<any>([]);

  const loading = false;
  const navigate = useNavigate();
  const handleChange = (index: number, value: string) => {
    if (/^[a-zA-Z0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
    if (value !== "" && index < 5) {
      inputRef.current[index + 1].focus();
    }
  };
  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen w-full">
        <div className="p-8 rounded-md  w-full  max-w-md  flex flex-col gap-10 border border-gray-200">
          <div className="text-center">
            <h1 className="font-bold text-2xl"> Verify</h1>
            <p className="text-sm text-gray-600">
              Enter the 6 digit code sent to your email
            </p>
          </div>
          <form>
            <div className="flex justify-between mb-8  ">
              {otp.map((letter: string, idx: number) => (
                <Input
                  key={idx}
                  type="text"
                  ref={(element) => (inputRef.current[idx] = element)}
                  maxLength={1}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(idx, e.target.value)
                  }
                  onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                    handleKeyDown(idx, e)
                  }
                  value={letter}
                  className="md:w-12 md:h-12 w-8 h-8 text-center text-sm md:text-2xl font-normal md:font-bold focus:outline-none focus:ring-1"
                />
              ))}
            </div>
            {loading ? (
              <Button
                disabled
                className="bg-orange-400 hover:bg-orange-300 w-full"
              >
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
              </Button>
            ) : (
              <Button className="bg-orange-400 hover:bg-orange-300 w-full">
                Verify
              </Button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;

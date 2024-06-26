import { Logo } from "@/components/logo";
import { ogImageResponse } from "@/utils/og";

export function GET(req: Request) {
  return ogImageResponse(
    <div className="w-[32px] h-[32px] flex items-center justify-center">
      <Logo className="h-[24px] w-[24px] fill-main-12" />
    </div>,
    { req, width: 32, height: 32 }
  );
}

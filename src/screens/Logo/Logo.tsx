import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export const Logo = (): JSX.Element => {
  return (
    <div className="bg-[#04171d] flex flex-row justify-center w-full">
      <Card className="bg-[#04171d] w-[689px] h-[278px] relative border-none">
        <CardContent className="p-0">
          {/* Logo Image */}
          <div className="absolute w-[525px] h-[86px] top-20 left-[94px]">
            <img
              className="absolute w-[525px] h-[86px] top-0 left-0"
              alt="Pramana Logo"
              src="/frame-5.svg"
            />
          </div>

          {/* Decorative Element */}
          <div className="absolute w-[41px] h-3.5 top-[218px] left-[324px]">
            <div className="relative w-[39px] h-3 top-px left-px">
              <img
                className="absolute w-7 h-px top-1.5 left-1.5 object-cover"
                alt="Connecting Line"
                src="/vector-5.svg"
              />
              <div className="w-[7px] h-[7px] top-[3px] left-0 rounded-[3.5px] absolute bg-[#0cd6ef]" />
              <div className="w-[7px] h-[7px] top-[3px] left-8 rounded-[3.5px] absolute bg-[#0cd6ef]" />
              <div className="w-3 h-3 top-0 left-3.5 rounded-md absolute bg-[#0cd6ef]" />
            </div>
          </div>

          {/* Tagline */}
          <div className="absolute top-[175px] left-[197px] [font-family:'MonktonMedium-Regular',Helvetica] font-normal text-[#12b8ca] text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
            Preserving Roots, Building Future
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

import React from "react";
interface CheckListItemProps {
  text: string;
}
export const CheckListItem: React.FC<CheckListItemProps> = ({ text }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="justify-center items-center bg-[linear-gradient(214deg,#2A51B2_16.91%,#6684CC_39.28%,#061A4D_66.02%)] self-stretch flex min-h-8 flex-col overflow-hidden w-[33px] h-[33px] my-auto px-[9px] rounded-[50px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5df098da3a2445479b20288fdbb4a5df/f6b60c76a6871553e3ba95081173e443041c37598eab03d7fb120fc048ba522b?placeholderIfAbsent=true"
          className="aspect-[1.5] object-contain w-[15px]"
          alt="Checkmark"
        />
      </div>
      <div className="text-black dark:text-white text-lg font-semibold leading-[1.2] self-stretch my-auto">
        {text}
      </div>
    </div>
  );
};

import cn from "@/utils/cn";

type SectionHeadingProps = {
  title?: string;
  subTitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export default function SectionHeading({ title, subTitle, titleClassName, subtitleClassName }: SectionHeadingProps) {
  return (
    <>
      {title ? <h2 className={cn("mb-2 text-center font-medium capitalize text-primary", titleClassName)}>{title}</h2> : null}
      {subTitle ? (
        <p className={cn("mb-6 text-center font-montserrat text-lg font-medium md:mb-10 md:text-3xl", subtitleClassName)}>{subTitle}</p>
      ) : null}
    </>
  );
}

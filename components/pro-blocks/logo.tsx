interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  width = 135,
  height = 36,
  className = "",
}) => {
  return (
    <img
      src="/logos/LOGO PRINCIPAL 2 - png.png"
      alt="Logo Doutor Libras"
      width={width}
      height={height}
      className={`w-[120px] h-[32px] md:w-[135px] md:h-[36px] ${className}`}
      style={{ objectFit: "contain" }}
      draggable={false}
    />
  );
};

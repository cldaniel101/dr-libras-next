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
      src="/logos/logo-colors-removebg.png"
      alt="Logo Doutor Libras"
      width={width}
      height={height}
      className={`w-[120px] h-full md:w-[135px] md:h-full ${className}`}
      style={{ objectFit: "contain" }}
      draggable={false}
    />
  );
};

export default function Camera({
  className,
  ...props
}: {
  className?: string;
  props?: React.ComponentProps<'svg'>;
}) {
  return (
    <svg
      className={className}
      {...props}
      baseProfile="tiny"
      height="50px"
      id="Layer_1"
      version="1.2"
      viewBox="0 0 24 24"
      width="50px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19,6h-1.586l-1-1C15.835,4.421,14.819,4,14,4h-4C9.181,4,8.165,4.421,7.586,5l-1,1H5C3.346,6,2,7.346,2,9v8  c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V9C22,7.346,20.654,6,19,6z M12,16c-1.933,0-3.5-1.568-3.5-3.5  C8.5,10.566,10.067,9,12,9s3.5,1.566,3.5,3.5C15.5,14.432,13.933,16,12,16z M18,11.299c-0.719,0-1.3-0.58-1.3-1.299  s0.581-1.301,1.3-1.301S19.3,9.281,19.3,10S18.719,11.299,18,11.299z" />
    </svg>
  );
}

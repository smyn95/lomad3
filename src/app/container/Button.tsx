type Props = {
  text: string;
  size: 'xs' | 's' | 'md' | 'lg' | 'xl';
  shape:
    | 'filled-white'
    | 'filled-gray'
    | 'filled-black'
    | 'outline-gray'
    | 'outline-black';
  disabled: boolean;
};

export default function Button({ text, size, shape, disabled }: Props) {
  return (
    <button
      type="button"
      className={`btn btn-${size} ${shape}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

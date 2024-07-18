const Input = ({
  value,
  onChange,
  onSubmit,
}: {
  value: string;
  onChange: (e: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      <div className="flex-row">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default Input;

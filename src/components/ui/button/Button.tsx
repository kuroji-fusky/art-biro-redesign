export default function Button({ children, onClick }: ClickableUI) {
  return (
    <button className="rounded-md px-2.5 py-1" onClick={onClick}>
      {children}
    </button>
  );
}

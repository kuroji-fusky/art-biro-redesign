type ComponentSlot = React.ReactNode;

declare interface ChildrenNode {
  children?: ComponentSlot;
}

declare interface ClickableUI<T = HTMLElement> extends ChildrenNode {
	className?: string
	style?: React.CSSProperties
	onClick?: React.MouseEventHandler<T>
}
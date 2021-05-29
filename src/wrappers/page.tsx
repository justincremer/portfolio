import { ScrollTop } from "../components";

interface Props {
  children: JSX.Element;
}

export const PageWrapper: React.FC<Props> = ({
  children,
  ...rest
}: Props): JSX.Element => (
  <div {...rest}>
	<ScrollTop />
	{children}
  </div>
);

import { ScrollTop } from "../components";

interface Props {
  children: JSX.Element;
}

export const PageWrapper: React.FC<Props> = ({
  children,
}: Props): JSX.Element => (
  <div>
	<ScrollTop />
	<div className="sm:m-7 md:m-16 xl:m-28">{children}</div>
  </div>
);

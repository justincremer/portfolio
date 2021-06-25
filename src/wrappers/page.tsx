import { ScrollTop } from "../components";

interface Props {
  children: JSX.Element;
}

export const PageWrapper: React.FC<Props> = ({
  children,
}: Props): JSX.Element => (
  <div>
	<ScrollTop />

	<div className="my-8 sm:mx-8 md:mx-16 xl:mx-40">{children}</div>
  </div>
);

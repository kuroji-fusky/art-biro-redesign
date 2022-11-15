import Head from "next/head";

interface IContainer extends Children {
  title: string;
  description?: string;
}

export default function PageContainer({
  title,
  description,
  children,
}: IContainer) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </>
  );
}

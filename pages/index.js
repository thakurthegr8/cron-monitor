import Head from "next/head";
import apiConfig from "../src/apiConfig";
import Table from "../src/components/Table";
import moment from "moment";

const columns = [
  {
    title: "Monitor Name",
    dataIndex: "monitorName",
    render: (text) => <strong>{text}</strong>,
  },
  {
    title: "Hit At",
    dataIndex: "createdAt",
    render: (text) => <>{moment(text).format("MMMM Do YYYY, h:mm:ss a")}</>,
  },
];

export default function Home(props) {
  console.log(props.data);
  return (
    <div className="container">
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Table columns={columns} dataSource={props.data} />
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    const response = await apiConfig.get("/api/get-monitor");
    const data = await response.data;
    if (data) {
      return {
        props: {
          data,
        },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

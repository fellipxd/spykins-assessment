import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

const Container = ({ children, ...customMeta }) => {
  const router = useRouter();


  const meta = {
    title:
      "Spykins",
    description: `Barbe and Cimon Notaries`,
    image: "/logo.png",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
              duration: 1,
            },
            pageAnimate: {
              opacity: 1,
              transition: {
                duration: 1,
              },
            },
            pageExit: {
              opacity: 0,
              duration: 2,
            },
          }}
          exit="pageExit"
        >
          <main>{children}</main>

        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Container;

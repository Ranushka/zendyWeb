const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GTM_ID;

const GtmScript: React.FC = (props) => {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      {/* <script
        async
        src={`https://www.googleoptimize.com/optimize.js?id=OPT-N2ZDMBT`}
      /> */}
      <style
        dangerouslySetInnerHTML={{
          __html: `.async-hide{opacity: 0 !important}`,
        }}
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              'user_id': 'u98q0c2l65ikfu2rkkd'
              // 'user_id': 'uwqewec434fteevfsf3'
              // 'user_id': 'u73dsdechwiqp34uebw'
            });
          `,
        }}
      />
    </>
  );
};

export default GtmScript;

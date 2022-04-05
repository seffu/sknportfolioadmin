// import { Html, Head, Main, NextScript } from 'next/document'

// export default function Document() {
//   static async getInitialProps(ctx) {
//     const originalRenderPage = ctx.renderPage

//     // Run the React rendering logic synchronously
//     ctx.renderPage = () =>
//       originalRenderPage({
//         // Useful for wrapping the whole react tree
//         enhanceApp: (App) => App,
//         // Useful for wrapping in a per-page basis
//         enhanceComponent: (Component) => Component,
//       })

//     // Run the parent `getInitialProps`, it now includes the custom `renderPage`
//     const initialProps = await Document.getInitialProps(ctx)

//     return initialProps
//     }

//     return (
//       <Html>
//         <Head>
//         <link href="/assets/css/vendor.min.css" rel="stylesheet" />
//         <link href="/assets/css/app.min.css" rel="stylesheet" />
//         <link href="/assets/plugins/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet" />
//         </Head>
//         <body class="theme-black">
            
//             <Main />
//             <NextScript />

//             <script src="/assets/js/vendor.min.js" type="2c51360d8219daef7d29307e-text/javascript"></script>
//             <script src="/assets/js/app.min.js" type="2c51360d8219daef7d29307e-text/javascript"></script>

//             <script src="/assets/plugins/masonry-layout/dist/masonry.pkgd.min.js" type="2c51360d8219daef7d29307e-text/javascript"></script>
//             <script src="/assets/plugins/chart.js/dist/chart.min.js" type="2c51360d8219daef7d29307e-text/javascript"></script>
//             <script src="/assets/plugins/moment/min/moment.min.js" type="2c51360d8219daef7d29307e-text/javascript"></script>
//             <script src="/assets/plugins/bootstrap-daterangepicker/daterangepicker.js" type="2c51360d8219daef7d29307e-text/javascript"></script>
//             <script src="/assets/js/demo/analytics.demo.js" type="2c51360d8219daef7d29307e-text/javascript"></script>

//             <script src="../cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="2c51360d8219daef7d29307e-|49" defer=""></script>
//             <script defer src="https://static.cloudflareinsights.com/beacon.min.js/v652eace1692a40cfa3763df669d7439c1639079717194" integrity="sha512-Gi7xpJR8tSkrpF7aordPZQlW2DLtzUlZcumS8dMQjwDHEnw9I7ZLyiOj/6tZStRBGtGgN6ceN6cMH8z7etPGlw==" data-cf-beacon='{"rayId":"6ddd4288ff6b0542","version":"2021.12.0","r":1,"token":"4db8c6ef997743fda032d4f73cfeff63","si":100}' crossorigin="anonymous"></script>
//         </body>
//       </Html>
//     );
//   }


  import Document, { Html, Head, Main, NextScript } from 'next/document'

  class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const originalRenderPage = ctx.renderPage
  
      // Run the React rendering logic synchronously
      ctx.renderPage = () =>
        originalRenderPage({
          // Useful for wrapping the whole react tree
          enhanceApp: (App) => App,
          // Useful for wrapping in a per-page basis
          enhanceComponent: (Component) => Component,
        })
  
      // Run the parent `getInitialProps`, it now includes the custom `renderPage`
      const initialProps = await Document.getInitialProps(ctx)
  
      return initialProps
    }
  
    render() {
      return (
        <Html>
        <Head>
          <link rel="icon" href="/assets/img/logo-dark.jpg" />

          <link rel="stylesheet" href="/assets/fonts/fontawesome.css"/>
          <link rel="stylesheet" href="/assets/fonts/ionicons.css"/>
          <link rel="stylesheet" href="/assets/fonts/linearicons.css"/>
          <link rel="stylesheet" href="/assets/fonts/open-iconic.css"/>
          <link rel="stylesheet" href="/assets/fonts/pe-icon-7-stroke.css"/>
          <link rel="stylesheet" href="/assets/fonts/feather.css"/>

          <link rel="stylesheet" href="/assets/css/bootstrap-material.css"/>
          <link rel="stylesheet" href="/assets/css/shreerang-material.css"/>
          <link rel="stylesheet" href="/assets/css/uikit.css"/>

          <link rel="stylesheet" href="assets/libs/bootstrap-datepicker/bootstrap-datepicker.css"/>

          <link rel="stylesheet" href="/assets/libs/perfect-scrollbar/perfect-scrollbar.css"/>
          <link rel="stylesheet" href="/assets/libs/flot/flot.css"/>
          <link rel="stylesheet" href="assets/css/pages/authentication.css"/>
        </Head>
        <body >
            <div class="page-loader">
              <div class="bg-primary"></div>
            </div>
            <Main />
            <NextScript />


                <script src="assets/js/pace.js"></script>
                <script src="assets/js/jquery-3.3.1.min.js"></script>
                <script src="assets/libs/popper/popper.js"></script>
                <script src="assets/js/bootstrap.js"></script>
                <script src="assets/js/sidenav.js"></script>
                <script src="assets/js/layout-helpers.js"></script>
                <script src="assets/js/material-ripple.js"></script>

                <script src="assets/libs/perfect-scrollbar/perfect-scrollbar.js"></script>
                <script src="assets/libs/eve/eve.js"></script>
                <script src="assets/libs/flot/flot.js"></script>
                <script src="assets/libs/flot/curvedLines.js"></script>
                <script src="assets/libs/chart-am4/core.js"></script>
                <script src="assets/libs/chart-am4/charts.js"></script>
                <script src="assets/libs/chart-am4/animated.js"></script>

                <script src="assets/libs/moment/moment.js"></script>
                <script src="assets/libs/bootstrap-datepicker/bootstrap-datepicker.js"></script>
                <script src="assets/js/pages/forms_pickers.js"></script>

                <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
                
                <script src="assets/js/demo.js"></script>
                <script src="assets/js/analytics.js"></script>
                <script src="assets/libs/datatables/datatables.js"></script>

        </body>
      </Html>
      )
    }
  }
  
  export default MyDocument
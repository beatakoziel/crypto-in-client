<template>
  <div>
    <app-header/>
    <form class="centered my-12" ref="quickBlinkChart"/>
    <v-card vertical
            class="px-15 mx-15 mb-15" max-width="95vw">
    <form class="centered my-12" ref="realTimeChart"/>
    <vue-trading-view
        class="mt-10"
        :options="{
      width: '100%',
      symbol: 'BINANCE:BTCUSDT',
      theme: 'dark',
      isTransparent: 'true'}"
    ></vue-trading-view>
    <form class="centered my-12" ref="chartWidget"/>
    </v-card>
  </div>
</template>

<style>
.centered {
  display: flex;
  justify-content: center
}
</style>

<script>
import VueTradingView from 'vue-trading-view';
import AppHeader from "@/components/AppHeader";

export default {
  name: 'App',

  components: {
    AppHeader,
    VueTradingView
  },

  data() {
    return {}
  },
  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute(
        "src",
        "https://s3.tradingview.com/external-embedding/embed-widget-screener.js?colorTheme=dark"
    );
    plugin.async = true;
    plugin.textContent = "{\n" +
        "            \"width\": \"100%\",\n" +
        "              \"height\": 490,\n" +
        "              \"defaultColumn\": \"overview\",\n" +
        "              \"screener_type\": \"crypto_mkt\",\n" +
        "              \"displayCurrency\": \"USD\",\n" +
        "              \"colorTheme\": \"dark\",\n" +
        "              \"isTransparent\": \"true\",\n" +
        "              \"locale\": \"en\"\n" +
        "          }"
    this.$refs.chartWidget.appendChild(plugin);

    const quickBlinkChart = document.createElement("script");
    quickBlinkChart.setAttribute(
        "src",
        "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js"
    );
    quickBlinkChart.async = true;
    quickBlinkChart.textContent = "  {\n" +
        "    \"symbols\": [\n" +
        "    {\n" +
        "      \"proName\": \"FX_IDC:EURUSD\",\n" +
        "      \"title\": \"EUR/USD\"\n" +
        "    },\n" +
        "    {\n" +
        "      \"proName\": \"BITSTAMP:BTCUSD\",\n" +
        "      \"title\": \"Bitcoin\"\n" +
        "    },\n" +
        "    {\n" +
        "      \"proName\": \"BITSTAMP:ETHUSD\",\n" +
        "      \"title\": \"Ethereum\"\n" +
        "    },\n" +
        "    {\n" +
        "      \"description\": \"Shiba Inu\",\n" +
        "      \"proName\": \"BINANCE:SHIBUSDT\"\n" +
        "    }\n" +
        "  ],\n" +
        "      \"colorTheme\": \"dark\",\n" +
        "      \"isTransparent\": false,\n" +
        "      \"showSymbolLogo\": true,\n" +
        "      \"isTransparent\": true,\n" +
        "      \"locale\": \"en\"\n" +
        "  }"
    this.$refs.quickBlinkChart.appendChild(quickBlinkChart);

    const realTimeChart = document.createElement("script");
    realTimeChart.setAttribute(
        "src",
        "https://s3.tradingview.com/tv.js"
    );
    realTimeChart.async = true;
    realTimeChart.textContent = " new TradingView.widget(\n" +
        "      {\n" +
        "        \"autosize\": true,\n" +
        "        \"symbol\": \"NASDAQ:AAPL\",\n" +
        "        \"interval\": \"D\",\n" +
        "        \"timezone\": \"Etc/UTC\",\n" +
        "        \"theme\": \"light\",\n" +
        "        \"style\": \"1\",\n" +
        "        \"locale\": \"en\",\n" +
        "        \"toolbar_bg\": \"#f1f3f6\",\n" +
        "        \"enable_publishing\": false,\n" +
        "        \"allow_symbol_change\": true,\n" +
        "        \"container_id\": \"tradingview_678ba\"\n" +
        "      }\n" +
        "  );"
    this.$refs.realTimeChart.appendChild(realTimeChart);
  }
};
</script>



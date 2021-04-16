import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    fontFamily: "DIN Neuzeit Grotesk",

    // h5 used for homepage title
    h5: {
        fontWeight:500,
        fontSize:30
    },

    // body1 used in upgrade page card subtitle
    body1: {
      fontWeight:500,
      fontSize:17
    }

  },
  palette: {
    primary: {
      // light: 这将从 palette.primary.main 中进行计算，
      main: '#f8ebee',
      // dark: 这将从 palette.primary.main 中进行计算，
      // contrastText: 这将计算与 palette.primary.main 的对比度
    },
    secondary: {
      light: '#787878',
      main: '#595959',
      dark: '#363636',
      contrastText: '#ffcc00',
    },

    darkgreen: {
      main: '#0c3934'
    },
    // 使用 `getContrastText()` 来最大化
    // 背景和文本的对比度
    contrastThreshold: 3,
    // 使用下面的函数用于将颜色的亮度在其调色板中
    // 移动大约两个指数。
    // 例如，从红色 500（Red 500）切换到 红色 300（Red 300）或 红色 700（Red 700）。
    tonalOffset: 0.2,
  },
});
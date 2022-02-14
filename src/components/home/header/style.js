import Style from "styled-components";

import { Styles } from "../../styles/styles";

const { 
    background_primary,
    background_secondary,
 } = Styles;

export const HeaderSite =  Style.header `
      width: 100%;
      height: 60px;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
      background: linear-gradient(90deg, ${background_primary} 0%, ${background_secondary} 48%, ${background_primary} 100%);

    .container {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .list {
            list-style: none;
            display: flex;
            align-items: center;
            gap: 1.5rem;
      }
`
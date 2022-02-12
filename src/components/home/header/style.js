import Style from "styled-components";

export const HeaderSite =  Style.header `
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;

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
import Style from "styled-components";

import { Styles } from "../../styles/styles";

const {
    background_primary
} = Styles

export const Footerr = Style.footer `
    width: 100%;
    height: 30vh;
    background-color: ${background_primary};
    
    .container {
        width: 100%;
    height: 30vh;
    display: flex;
        align-items: center;
        justify-content: space-between;
    }

`
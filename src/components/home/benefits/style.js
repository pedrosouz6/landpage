import Style from "styled-components";

import { Styles } from "../../styles/styles";

const {
    background_third,
    font_color,
    background_primary
} = Styles;

export const Section = Style.section `
    background-color: ${font_color};
    width: 100%;
    height: 230px;
    
    .center {
        position: relative;
    }
    
    .container {
        width: 100%;
        margin-top: -230px;
        left: 0;
        position: absolute;
        padding: 0 50px;
    }

    .container h2 {
        text-align: center;
        color: ${font_color};
        margin-bottom: 3rem;
        position: relative;
    }

    .container h2::before{
        content: '';
        position: absolute;
        top: -65px;
        left: 50%;
        display: block;
        width: 10px;
        height: 30px;
        border-radius: 50px;
        background: ${font_color};
    }

    article {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;
    }

    .cards {
        width: 260px;
        height: 320px;
        padding: 15px;
        background-color: ${font_color};
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 1px 1px 3px 1px rgba(0, 127, 39, .6);
    }

    .cards p {
        color: ${background_primary};
        letter-spacing: .3px;
        text-indent: 10px;
    }

    .icon i {
        font-size: 30pt;
    }

    .title h3 {
        color: ${background_primary};
        margin-bottom: .8rem;
    }

`
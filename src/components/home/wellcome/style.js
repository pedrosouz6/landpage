import Style from "styled-components";

import { Styles } from "../../styles/styles";

const { 
    background_primary,
    background_secondary,
 } = Styles;

export const Section = Style.section `
    width: 100%;
    height: 145vh;
    background: linear-gradient(90deg, ${background_primary} 0%, ${background_secondary} 48%, ${background_primary} 100%);
    padding-top: 60px;
    z-index: 10;

    .container {
        width: 100%;
        height: calc(100vh - 60px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.5rem;
    }

    .container article {
        flex: 1 1 350px;
    }

    .message h1{
        margin: 0;
        font-size: 30pt;
        font-weight: 600;
    }
    
    .message button {
        margin-top: 1.5rem;
        padding: 10px 30px;
        background-color: white;
        color: ${background_primary};
        font-size: 12pt;
        font-weight: 600;
        letter-spacing: .5px;
        border-radius: 10px
    }
    
    .image img {
        max-width: 100%;
        min-width: 410px;
        clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
    }
` 
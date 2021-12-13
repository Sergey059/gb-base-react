import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body{
		margin: 0;
		min-width: 320px;
		line-height: 1.6;
		overflow-x: hidden;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	code{
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
	}
	h1,h2,h3,h4,h5,h6 {
	margin: 0;
	line-height: 1.2;
	}
	p{
		margin: 0;
	}
	img{
		width: 100%;
		height: auto;
	}
	a{
		text-decoration: none;
		transition: .3s ease-in-out;
	}
	button{
		display: inline-block;
		border: none;
		outline: none;
		background: transparent;
		cursor: pointer;
		transition: .3s ease-in-out;
	}
	ul, ol{
		margin: 0;
		padding: 0;
		list-style-type: none;
	}
	::placeholder{
		color: #a2a2a2;
	}
	input, textarea{
		background: transparent;
		border: none;
		outline: none;
		transition: .3s ease-in-out;
		&:focus{
			border: 1px solid #8ca6c1;
		}
		&:focus:required:invalid{
			border-color: red;
		}
		&:required:valid{
			border-color: green;
		}
	}
`;

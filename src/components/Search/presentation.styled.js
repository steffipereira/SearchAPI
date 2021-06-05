import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	background: #53e3a6;
	opacity: .8;
	width: 100%;
	height: 30vh;
	align-items: center;
	flex-direction: column;
`
const Form = styled.form`
	display: flex;
	flex-direction: column;
`
const Input = styled.input`
	display: flex;
	outline: 0;
	border: 1px solid #fff;
	background-color: #fff;
	border-radius: 3px;
	padding: 10px 15px;
	margin: 0 auto 10px auto;
	text-align: center;
	font-size: 16px;
	color: #fff;
	font-weight: 300;
	width: 40vw;

	&:hover{
		background-color: #fff;
	}

	&:focus{
		background-color: #fff;
		color: #53e3a6;
	}
}
`
const Button = styled.button`
	background-color: #fff;
	border: 0;
	padding: 10px 15px;
	border-radius: 3px;
	cursor: pointer;
	font-size: 18px;

	&:hover{
		background-color: rgb(245, 247, 249);
	}
}
`

export { Wrapper, Form, Input, Button }

import React from 'react'
import styled from 'styled-components';

function Pagination(props) {
    const {pageCount,currentPage,handlePageChange}=props;
    if(pageCount===0) return null;

    function handleIncrement() {
        if(currentPage+1<pageCount)
        handlePageChange(currentPage+1);
    }
    function handleDecrement() {
        if(currentPage-1>=0)
        handlePageChange(currentPage-1);
    }
    function handleValue(e) {
        const val=e.target.value;
        if(val>=0 && val<pageCount)
        console.log(val);
        handlePageChange(val);
    }
    return (
        <Container>
            <div onClick={handleDecrement} className='button'>
                <img src="/images/left-arrow.svg"/>
            </div>
            <div className='numbers'>
            Page
            <input className="page" onChange={handleValue} type="number" value={currentPage+1} min="1" max="37" slider="none"/>
            of {pageCount}
            </div>
            <div onClick={handleIncrement} className='button'>
                <img src="/images/right-arrow.svg"/>
            </div>

        </Container>
    )
}

export default Pagination

const Container=styled.div `
display: flex;
justify-content: flex-end;
margin-top: 20px;
align-items: center;
.button {
    background: #fc9d69;
    box-shadow: 0 2px 4px rgb(24 4 50 / 24%);
    border-radius: 4px;
    padding: 12px 18px;
    cursor: pointer;
    user-select: none;
    tap-highlight-color: transparent;
    user-drag: none;
}
.numbers {
    margin: 0 14px;
    color: #616161;
    font-size: 16px;
    font-weight: 600;
}
.page {
    border: 1px solid #d0d0d0;
    color: #616161;
    font-size: 16px;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 8px;
    text-align: center;
    width: 50px;
    background: #fff;
    margin: 0 6px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

`
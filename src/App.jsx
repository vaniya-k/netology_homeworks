import React, { useState } from 'react';
import {nanoid} from 'nanoid';
import Video from './Video.jsx';
import Article from './Article.jsx';
import WithNewWrapper from './WithNewWrapper.jsx';
import WithPopularWrapper from './WithPopularWrapper.jsx';

function List(props) {
    function applyWrapperIfNeeded(item) {
        if (item.views > 1000) {
            return (item.type === `video`)
                ? <WithPopularWrapper key={nanoid()}><Video {...item}/></WithPopularWrapper>  
                : <WithPopularWrapper key={nanoid()}><Article {...item}/></WithPopularWrapper>  
        } else if (item.views < 100) {
            return (item.type === `video`)
                ? <WithNewWrapper key={nanoid()}><Video {...item}/></WithNewWrapper>  
                : <WithNewWrapper key={nanoid()}><Article {...item}/></WithNewWrapper>  
        } else {
            return (item.type === `video`)
                ? <Video key={nanoid()} {...item}/>  
                : <Article  key={nanoid()} {...item}/>
        }
    };
    
    return props.list.map(item => applyWrapperIfNeeded(item))
};

export default function App() {
    const [list, setList] = useState([
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            views: 50
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            views: 12
        },
        {
            type: 'article',
            title: 'Невероятные события в неизвестном поселке...',
            views: 175
        },
        {
            type: 'article',
            title: 'Секретные данные были раскрыты!',
            views: 1532
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            views: 4253
        },
        {
            type: 'article',
            title: 'Кот Бегемот обладает невероятной...',
            views: 12,
        },
    ]);

    return (
        <List list={list} />
    );
}

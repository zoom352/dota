import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { animated, useTransition } from 'react-spring';
import { addItem, removeItem } from '../store/reducers/listSlice';

const List = () => {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.list);

    const handleAddItem = () => {
        dispatch(addItem());
    };

    const handleRemoveItem = () => {
        dispatch(removeItem());
    };

    const transitions = useTransition(list, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(100%)' },
    })

    return (
        <div>
            <div>
                <button onClick={handleAddItem}>Добавить</button>
                <button onClick={handleRemoveItem}>Удалить</button>
            </div>
            <div style={{ display: 'flex', overflow: 'hidden' }}>
                {transitions((style, item) => (
                    <animated.div
                        key={item.id}
                        style={{
                            ...style,
                            width: '20%',
                            backgroundColor: item.color,
                            height: '0',
                            paddingBottom: '20%'
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default List

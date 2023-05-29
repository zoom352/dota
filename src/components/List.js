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
        from: { opacity: 0, transform: 'translateX(-200%)', width: '0%', paddingBottom: '0%' },
        enter: { opacity: 1, transform: 'translateX(0%)', width: '20%', paddingBottom: '20%' },
        leave: { opacity: 0, transform: 'translateX(200%)', width: '0%', paddingBottom: '0%' },
    })

    return (
        <div>
            <div>
                <button onClick={handleAddItem}>Добавить</button>
                <button onClick={handleRemoveItem}>Удалить</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {transitions((style, item) => (
                    <animated.div
                        key={item.id}
                        style={{
                            ...style,
                            backgroundColor: item.color,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default List

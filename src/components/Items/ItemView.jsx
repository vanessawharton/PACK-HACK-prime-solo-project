// styling
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function ItemView( {item} ) {

    const handleDelete = () => {
        dispatch({ type: 'DELETE_ITEM', payload: id});
    };

    return (
        <div className="card">
            <Card key={item?.id}>
                <CardContent>
                    {item.name}
                    <button className='deleteItemBtn' onClick={handleDelete}>Delete</button>
                </CardContent>
            </Card>
        </div>
    )
}

export default ItemView;
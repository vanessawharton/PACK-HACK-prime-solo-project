// hooks
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemView from '../Items/ItemView';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function PackingListDetails() {

    const dispatch = useDispatch();

    // selected trip id save to DB
    const { id } = useParams();

    // Pull in current trip data from state
    const packingList = useSelector(store => store.packingLists);

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    // Pull data on navigation to page or reload
    useEffect(() => {
        dispatch({ type: 'FETCH_SELECT_PACKING_LIST', payload: id});
    }, [])

    return (
        <div className="container">
            <center>
                <h2>{packingList?.title}</h2>
                <Fab size="medium" color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>            
            </center>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
        >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Clothing
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            // Add List
        </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
        >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Toiletries</Typography>
        </AccordionSummary>
        <AccordionDetails>
            // Add List
        </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
        >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Entertainment
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            // Add Items
        </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
        >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Miscellaneous</Typography>
        </AccordionSummary>
        <AccordionDetails>
            // Add Items
        </AccordionDetails>
        </Accordion>
            <section>
                {packingList?.map(item => (
                    <ItemView key={item.id} item= {item} />
                ))}
            </section>
        </div>
    );
}

export default PackingListDetails;
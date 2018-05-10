import React from 'react';
import { withStyles } from 'material-ui/styles';
import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Img from '../Items/Img.jsx';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    body: {
        fontSize: 14
    }
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto'
    },
    table: {
        minWidth: 700
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default
        }
    }
});

function CustomizedTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>Название</CustomTableCell>
                        <CustomTableCell numeric>Изображение</CustomTableCell>
                        <CustomTableCell numeric>Цена</CustomTableCell>
                        <CustomTableCell numeric>
                            Цена со скидкой
                        </CustomTableCell>
                        <CustomTableCell numeric>Моя цена</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        hover
                        role="checkbox"
                        aria-checked={false}
                        tabIndex={-1}
                        selected={false}
                    >
                        <TableCell component="tr" scope="row">
                            Сенлорен, Эйзенберг: Введение в Elixir
                        </TableCell>
                        <TableCell numeric>
                            <Img src="//img1.labirint.ru/books59/581645/big.jpg" />
                        </TableCell>
                        <TableCell numeric>labirint.ru: 1124</TableCell>
                        <TableCell numeric>labirint.ru: 843</TableCell>
                        <TableCell numeric>780</TableCell>
                    </TableRow>

                    <TableRow
                        hover
                        role="checkbox"
                        aria-checked={false}
                        tabIndex={-1}
                        selected={false}
                    >
                        <TableCell component="tr" scope="row">
                            Роберт Маккаммон- Пятерка
                        </TableCell>
                        <TableCell numeric>
                            <Img src="//img1.labirint.ru/books50/492961/big.jpg" />
                        </TableCell>
                        <TableCell numeric>labirint.ru: 506</TableCell>
                        <TableCell numeric>labirint.ru: 308</TableCell>
                        <TableCell numeric>320</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    );
}

export default withStyles(styles)(CustomizedTable);

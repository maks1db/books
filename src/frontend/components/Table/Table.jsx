import React from 'react';
import { withStyles } from 'material-ui/styles';
import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TablePagination
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Img from '../Items/Img.jsx';

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
                        <TableCell>Название</TableCell>
                        <TableCell>Изображение</TableCell>
                        <TableCell>Цена</TableCell>
                        <TableCell>Цена со скидкой</TableCell>
                        <TableCell>Моя цена</TableCell>
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
                        <TableCell scope="row">
                            Сенлорен, Эйзенберг: Введение в Elixir
                        </TableCell>
                        <TableCell>
                            <Img src="//img1.labirint.ru/books59/581645/big.jpg" />
                        </TableCell>
                        <TableCell>labirint.ru: 1124</TableCell>
                        <TableCell>labirint.ru: 843</TableCell>
                        <TableCell>780</TableCell>
                    </TableRow>

                    <TableRow
                        hover
                        role="checkbox"
                        aria-checked={false}
                        tabIndex={-1}
                        selected={false}
                    >
                        <TableCell scope="row">
                            Роберт Маккаммон- Пятерка
                        </TableCell>
                        <TableCell>
                            <Img src="//img1.labirint.ru/books50/492961/big.jpg" />
                        </TableCell>
                        <TableCell>labirint.ru: 506</TableCell>
                        <TableCell>labirint.ru: 308</TableCell>
                        <TableCell>320</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <TablePagination
                component="div"
                count={25}
                rowsPerPage={6}
                page={1}
                backIconButtonProps={{
                    'aria-label': 'Previous Page'
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page'
                }}
                labelRowsPerPage="Товаров на странице"
                // onChangePage={this.handleChangePage}
                // onChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default withStyles(styles)(CustomizedTable);

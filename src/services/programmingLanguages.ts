import * as db from './db'
import * as helper from '../helper';
import config from '../config';

export async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    FROM programming_languages LIMIT ${offset},${config.listPerPage}`
    );
    const data = rows ?? [];
    const meta = { page };

    return {
        data,
        meta
    }
}


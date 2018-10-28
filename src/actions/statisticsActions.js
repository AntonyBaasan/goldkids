import { UPDATE_STAT } from './actionTypes';

export const setKidWeeklyStat = ({ kidId, weekId, newStat }) => ({
    type: UPDATE_STAT,
    payload: { kidId, weekId, newStat },
});

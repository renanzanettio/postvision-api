export function normalizeDate(date) {
    return new Date(date).toISOString().split('T')[0];
}

export function calculateStreak(sessions) {
    const days = new Set(
        sessions.map(s => normalizeDate(s.date))
    );

    let streak = 0;
    let currentDate = new Date();

    while (true) {
        const dateStr = normalizeDate(currentDate);

        if (days.has(dateStr)) {
            streak++;
            currentDate.setDate(currentDate.getDate() - 1);
        } else {
            break;
        }
    }

    return streak;
}

export function getWeeklyData(sessions) {
    const result = [];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
        const day = new Date();
        day.setDate(today.getDate() - i);

        const dayStr = normalizeDate(day);

        const daySessions = sessions.filter(s =>
            normalizeDate(s.date) === dayStr
        );

        if (daySessions.length > 0) {
            const corretos = daySessions.reduce((acc, s) => acc + s.report.correctReps, 0);
            const total = daySessions.reduce(
                (acc, s) => acc + s.report.correctReps + s.report.incorrectReps,
                0
            );

            result.push({
                date: day.toISOString(),
                corretos,
                total
            });
        }
    }

    return result;
}

export function getMonthlyData(sessions) {
    const map = {};

    sessions.forEach(s => {
        const day = normalizeDate(s.date);

        if (!map[day]) {
            map[day] = 0;
        }

        map[day] += s.report.correctReps;
    });

    return Object.keys(map)
        .sort()
        .map(day => ({
            date: day,
            totalReps: map[day]
        }));
}
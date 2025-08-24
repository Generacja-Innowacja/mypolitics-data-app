export const REPORT_COLORS = {
    DARK_GREEN: "#105E4A",
    GREEN: "#22A274",
    RED: "#E83A55",
    DARK_RED: "#742A3B",
    TEAL: "#0D6762",
    BLUE: "#255CA6",
    VIOLET: "#3C1A66",
    OLIVE: "#654E0E",
    MAGENTA: "#8E3078",
    LIGHT_BLUE: "#306A8E",
    LIGHT_GREEN: "#548E30",
    ROSE_GOLD: "#8E6230",
    MUTED_AZURE: "#324C52"
}

export const REPORT_ANSWERS_ORDER = {
    "default": -1,
    "Zdecydowanie za": 0,
    "Za": 1,
    "Nie wiem": 2,
    "Przeciw": 3,
    "Zdecydowanie przeciw": 4,
}

export const REPORT_ANSWER_COLORS = {
    "Zdecydowanie za": REPORT_COLORS.DARK_GREEN,
    "Za": REPORT_COLORS.GREEN,
    "Przeciw": REPORT_COLORS.RED,
    "Zdecydowanie przeciw": REPORT_COLORS.DARK_RED,
    "Nie wiem": REPORT_COLORS.MUTED_AZURE,
}

export const REPORT_NON_STANDARD_ANSWER_COLORS_ORDER: Record<string, string> = {
    "0": REPORT_COLORS.TEAL,
    "1": REPORT_COLORS.BLUE,
    "2": REPORT_COLORS.VIOLET,
    "3": REPORT_COLORS.OLIVE,
    "4": REPORT_COLORS.MAGENTA,
    "5": REPORT_COLORS.LIGHT_BLUE,
    "6": REPORT_COLORS.LIGHT_GREEN,
    "7": REPORT_COLORS.ROSE_GOLD,
    "8": REPORT_COLORS.MUTED_AZURE,
    "9": REPORT_COLORS.DARK_GREEN,
    "10": REPORT_COLORS.GREEN,
    "11": REPORT_COLORS.RED,
    "12": REPORT_COLORS.DARK_RED,
}
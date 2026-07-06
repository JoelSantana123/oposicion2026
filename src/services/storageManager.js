const STORAGE_KEY_STATS = 'oposicion_stats';
const STORAGE_KEY_HISTORY = 'oposicion_history';
const STORAGE_KEY_FAILED = 'oposicion_failed_questions';

export const StorageManager = {
  getStats: () => {
    const data = localStorage.getItem(STORAGE_KEY_STATS);
    if (!data) {
      return {
        totalTests: 0,
        averageScore: 0,
        themes: {} // e.g., '0100': { attempts: 0, correct: 0, total: 0 }
      };
    }
    return JSON.parse(data);
  },

  getHistory: () => {
    const data = localStorage.getItem(STORAGE_KEY_HISTORY);
    return data ? JSON.parse(data) : [];
  },

  getFailedQuestions: () => {
    const data = localStorage.getItem(STORAGE_KEY_FAILED);
    return data ? JSON.parse(data) : [];
  },

  saveTestResult: (result) => {
    // result structure: { id, date, themeId, score, correct, incorrect, blank, total, failedQuestions: [] }
    
    // 1. Save to History
    const history = StorageManager.getHistory();
    history.push({ ...result, failedQuestions: undefined }); // Don't bloat history with full questions
    localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(history));

    // 2. Update Stats
    const stats = StorageManager.getStats();
    stats.totalTests += 1;
    stats.averageScore = history.reduce((acc, curr) => acc + curr.score, 0) / history.length;
    
    if (result.themeId !== 'mixed') {
      if (!stats.themes[result.themeId]) {
        stats.themes[result.themeId] = { attempts: 0, correct: 0, total: 0 };
      }
      stats.themes[result.themeId].attempts += 1;
      stats.themes[result.themeId].correct += result.correct;
      stats.themes[result.themeId].total += (result.correct + result.incorrect + result.blank);
    }
    localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(stats));

    // 3. Update Failed Questions (to review later)
    if (result.failedQuestions && result.failedQuestions.length > 0) {
      let failedMap = StorageManager.getFailedQuestions();
      // Only keep unique failed questions by ID
      const existingIds = new Set(failedMap.map(q => q.id));
      const newFails = result.failedQuestions.filter(q => !existingIds.has(q.id));
      failedMap = [...failedMap, ...newFails];
      localStorage.setItem(STORAGE_KEY_FAILED, JSON.stringify(failedMap));
    }
  },

  removeFailedQuestion: (questionId) => {
    let failedMap = StorageManager.getFailedQuestions();
    failedMap = failedMap.filter(q => q.id !== questionId);
    localStorage.setItem(STORAGE_KEY_FAILED, JSON.stringify(failedMap));
  },

  clearData: () => {
    localStorage.removeItem(STORAGE_KEY_STATS);
    localStorage.removeItem(STORAGE_KEY_HISTORY);
    localStorage.removeItem(STORAGE_KEY_FAILED);
  }
};

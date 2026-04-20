export async function explainWithAI(term: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Simplified Explanation: \n\n"${term}" generally refers to a standard procedure or assessment in the insurance claim lifecycle that establishes liability, cost, or validity. Please consult your policy for exact definitions.`);
    }, 1000);
  });
}

export async function analyzeDocument(fileName: string): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fileName.length > 5);
    }, 1500);
  });
}

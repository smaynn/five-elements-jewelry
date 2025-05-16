// Types for the calculation result
interface CalculationResult {
  rating: string;
  score: number;
  favorable: string[];
  unfavorable: string[];
  recommendation: string;
  explanation: string;
}

// Helper function to get a random integer between min and max (inclusive)
const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Calculate Chinese zodiac sign based on birth year
const getChineseZodiac = (birthDate: string): string => {
  const zodiacSigns = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
  const year = new Date(birthDate).getFullYear();
  return zodiacSigns[(year - 4) % 12];
};

// Map zodiac sign to element
const zodiacToElement = {
  'Rat': 'Water',
  'Ox': 'Earth',
  'Tiger': 'Wood',
  'Rabbit': 'Wood',
  'Dragon': 'Earth',
  'Snake': 'Fire',
  'Horse': 'Fire',
  'Goat': 'Earth',
  'Monkey': 'Metal',
  'Rooster': 'Metal',
  'Dog': 'Earth',
  'Pig': 'Water'
};

// Calculate Western zodiac sign based on birth month and day
const getWesternZodiac = (birthDate: string): string => {
  const date = new Date(birthDate);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini';
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
  return 'Pisces';
};

// Map Western zodiac sign to element
const westernZodiacToElement = {
  'Aries': 'Fire',
  'Leo': 'Fire',
  'Sagittarius': 'Fire',
  'Taurus': 'Earth',
  'Virgo': 'Earth',
  'Capricorn': 'Earth',
  'Gemini': 'Air',
  'Libra': 'Air',
  'Aquarius': 'Air',
  'Cancer': 'Water',
  'Scorpio': 'Water',
  'Pisces': 'Water'
};

// Convert Air element to Metal for consistency with Chinese five elements
const convertAirToMetal = (element: string): string => {
  return element === 'Air' ? 'Metal' : element;
};

// Calculate name energy based on the sum of character codes
const calculateNameEnergy = (name: string): string => {
  const elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
  const nameSum = name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return elements[nameSum % 5];
};

// Generate explanation based on elements
const generateExplanation = (
  favorable: string[], 
  unfavorable: string[], 
  chineseZodiac: string, 
  westernZodiac: string, 
  nameElement: string
): string => {
  return `According to your birth information, you were born in the year of the ${chineseZodiac} (${zodiacToElement[chineseZodiac]} element) and your Western zodiac sign is ${westernZodiac} (${convertAirToMetal(westernZodiacToElement[westernZodiac])} element). Your name resonates with the ${nameElement} element. Your destiny chart indicates an imbalance that can be harmonized by incorporating more ${favorable.join(' and ')} energies, while being mindful of excess ${unfavorable.join(' and ')} influences. Wearing jewelry containing elements that strengthen your favorable elements will help balance your personal energy and enhance your natural strengths.`;
};

// Generate specific jewelry recommendation
const generateRecommendation = (favorable: string[]): string => {
  const recommendations = {
    'Wood': 'We recommend our Green Jade Harmony Bracelet or Emerald Forest Pendant to enhance your Wood energy, bringing growth and vitality to your life path.',
    'Fire': 'The Ruby Passion Necklace or Carnelian Flame Earrings would be ideal to boost your Fire energy, enhancing passion, creativity, and confidence.',
    'Earth': 'Consider our Citrine Abundance Ring or Amber Serenity Bracelet to ground your energy and strengthen your Earth element for stability and nourishment.',
    'Metal': 'The Silver Clarity Cuff or White Gold Precision Ring would complement your Metal element needs, providing structure and clarity to your path.',
    'Water': 'Our Sapphire Flow Pendant or Aquamarine Tide Earrings will enhance your Water element, supporting emotional balance and intuitive wisdom.'
  };
  
  const primaryElement = favorable[0];
  return recommendations[primaryElement];
};

// Main calculation function
export const calculateDestiny = (name: string, birthDate: string, birthTime: string): CalculationResult => {
  // Get Chinese and Western zodiac signs
  const chineseZodiac = getChineseZodiac(birthDate);
  const westernZodiac = getWesternZodiac(birthDate);
  
  // Get base elements from zodiac signs
  const chineseElement = zodiacToElement[chineseZodiac];
  const westernElement = convertAirToMetal(westernZodiacToElement[westernZodiac]);
  
  // Calculate name element
  const nameElement = calculateNameEnergy(name);
  
  // Use birth time to determine another influential element
  const hour = parseInt(birthTime.split(':')[0], 10);
  const timeElements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
  const timeElement = timeElements[Math.floor(hour / 5) % 5];
  
  // Count element frequencies
  const elementCounts = {
    'Wood': 0,
    'Fire': 0,
    'Earth': 0,
    'Metal': 0,
    'Water': 0
  };
  
  elementCounts[chineseElement]++;
  elementCounts[westernElement]++;
  elementCounts[nameElement]++;
  elementCounts[timeElement]++;
  
  // Determine favorable and unfavorable elements based on the productive and controlling cycles
  // Productive cycle: Wood feeds Fire, Fire creates Earth, Earth bears Metal, Metal collects Water, Water nourishes Wood
  // Controlling cycle: Wood parts Earth, Earth absorbs Water, Water quenches Fire, Fire melts Metal, Metal chops Wood
  
  const productiveCycle = {
    'Wood': 'Fire',
    'Fire': 'Earth',
    'Earth': 'Metal',
    'Metal': 'Water',
    'Water': 'Wood'
  };
  
  const controllingCycle = {
    'Wood': 'Earth',
    'Earth': 'Water',
    'Water': 'Fire',
    'Fire': 'Metal',
    'Metal': 'Wood'
  };
  
  // Find the most and least frequent elements
  const sortedElements = Object.entries(elementCounts)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);
  
  const mostFrequent = sortedElements[0];
  const leastFrequent = sortedElements[4] || sortedElements[sortedElements.length - 1];
  
  // Determine favorable elements (elements that produce the most frequent and control the least frequent)
  let favorable = [];
  
  // Find what produces the most frequent element
  const produces = Object.entries(productiveCycle)
    .find(([key, value]) => value === mostFrequent)?.[0];
  
  if (produces) favorable.push(produces);
  
  // Find what the least frequent controls
  const controlled = controllingCycle[leastFrequent];
  if (controlled && !favorable.includes(controlled)) favorable.push(controlled);
  
  // If we don't have 2 favorable elements yet, add the most frequent
  if (favorable.length < 2 && !favorable.includes(mostFrequent)) {
    favorable.push(mostFrequent);
  }
  
  // Determine unfavorable elements (elements controlled by the most frequent and that control the most frequent)
  let unfavorable = [];
  
  // Find what the most frequent controls
  const controlledByMost = controllingCycle[mostFrequent];
  if (controlledByMost) unfavorable.push(controlledByMost);
  
  // Find what controls the most frequent
  const controlsMost = Object.entries(controllingCycle)
    .find(([key, value]) => value === mostFrequent)?.[0];
  
  if (controlsMost && !unfavorable.includes(controlsMost)) unfavorable.push(controlsMost);
  
  // Calculate a destiny score (for display purposes)
  const score = getRandomInt(60, 95);
  
  // Determine rating based on score
  let rating;
  if (score >= 85) rating = 'Excellent';
  else if (score >= 75) rating = 'Good';
  else if (score >= 65) rating = 'Average';
  else rating = 'Challenging';
  
  // Generate explanation and recommendation
  const explanation = generateExplanation(favorable, unfavorable, chineseZodiac, westernZodiac, nameElement);
  const recommendation = generateRecommendation(favorable);
  
  return {
    rating,
    score,
    favorable,
    unfavorable,
    explanation,
    recommendation
  };
};
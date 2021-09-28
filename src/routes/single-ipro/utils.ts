import { colors } from '../../themes/colors';
import { Sentiment } from '../../types';

export const userSentimentColors = {
    [Sentiment.Positive]: colors.yellowishGreen,
    [Sentiment.Neutral]: colors.yellow,
    [Sentiment.Negative]: colors.fuchsia
};

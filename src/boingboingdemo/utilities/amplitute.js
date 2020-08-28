import amplitude from 'amplitude-js/amplitude';

export const initAmplitude = () => {
    amplitude.getInstance().init("4476d0f6e5c9685e0a5973c1e917227f");
};

export const setAmplitudeUserDevice = installationToken => {
    amplitude.getInstance().setDeviceId(installationToken);
};

export const setAmplitudeUserId = userId => {
    amplitude.getInstance().setUserId(userId);
};

export const setAmplitudeUserProperties = properties => {
    amplitude.getInstance().setUserProperties(properties);
};

export const sendAmplitudeData = (eventType, eventProperties) => {
    amplitude.getInstance().logEvent(eventType, eventProperties);
};
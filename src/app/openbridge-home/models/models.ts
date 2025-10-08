import { LinearAdvice } from "@oicl/openbridge-webcomponents/dist/navigation-instruments/thruster/advice";
import { PropellerType } from "@oicl/openbridge-webcomponents/dist/navigation-instruments/thruster/propeller";
import { InstrumentState } from "@oicl/openbridge-webcomponents/dist/navigation-instruments/types";
import { AngleAdvice } from "@oicl/openbridge-webcomponents/dist/navigation-instruments/watch/advice";

export class InformationModel {
  name?: string;
  weight?: number;
  shipSpeed?: number;
  thrusterInfo?: ThrusterDataModel;
  compassInfo?: CompassDataModel;
  weatherInfo?: WeatherDataModel;
  location?: locationModel;
}

export class ThrusterDataModel {
  angle?: number;
  angleSetpoint?: number;
  thrust?: number;
  thrustSetpoint?: number;
  atAngleSetpoint?: boolean;
  disableAutoAtAngleSetpoint?: boolean;
  autoAtAngleSetpointDeadband?: number;
  touching?: boolean;
  atThrustSetpoint?: boolean;
  thrustSetpointAtZero?: boolean;
  disableAutoAtThrustSetpoint?: boolean;
  autoAtThrustSetpointDeadband?: number;
  thrustSetpointAtZeroDeadband?: number;
  singleDirection?: boolean;
  topPropeller?: PropellerType;
  bottomPropeller?: PropellerType;
  angleAdvices?: AngleAdvice[];
  thrustAdvices?: LinearAdvice[];

  loading?: number; //thruser
  noPadding?: boolean;//thruser
  starboardPortIndicator?: boolean;
  state?: InstrumentState;//thruser
 /*  compassInfo?: CompassDataModel;
  weatherInfo?: WeatherDataModel; */
}

export class CompassDataModel {
  heading?: number;
  courseOverGround?: number;
  headingAdvices?: AngleAdvice[];
}

export class WeatherDataModel {
  temperature?: number;
  airPressure?: number
  humidity?: number;
}

export class locationModel {
  latitude?: string;
  longitude?: string;
}


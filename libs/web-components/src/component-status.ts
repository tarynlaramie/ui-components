export enum ComponentStatus {
  Alpha,
  Beta,
  Prod
};

const AlphaStatuses = [ComponentStatus.Alpha, ComponentStatus.Beta, ComponentStatus.Prod]
const BetaStatuses = [ComponentStatus.Alpha, ComponentStatus.Beta];

export function componentHasStatus(component, componentStatus: ComponentStatus): boolean {
  let hasStatus = false;

  switch (componentStatus) {
    case ComponentStatus.Alpha: {
      hasStatus = AlphaStatuses.includes(component.status);

      break;
    }

    case ComponentStatus.Beta: {
      hasStatus = BetaStatuses.includes(component.status);

      break;
    }

    case ComponentStatus.Prod: {
      hasStatus = component.status == ComponentStatus.Prod;

      break;
    }
  }

  return hasStatus;
}
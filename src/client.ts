/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";
import Long = require("long");

export const protobufPackage = "main";

export enum Maturity {
  Skeleton = 0,
  Draft = 1,
  Solid = 2,
  UNRECOGNIZED = -1,
}

export function maturityFromJSON(object: any): Maturity {
  switch (object) {
    case 0:
    case "Skeleton":
      return Maturity.Skeleton;
    case 1:
    case "Draft":
      return Maturity.Draft;
    case 2:
    case "Solid":
      return Maturity.Solid;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Maturity.UNRECOGNIZED;
  }
}

export function maturityToJSON(object: Maturity): string {
  switch (object) {
    case Maturity.Skeleton:
      return "Skeleton";
    case Maturity.Draft:
      return "Draft";
    case Maturity.Solid:
      return "Solid";
    case Maturity.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Dummy {
  id: string;
  createdAt: number;
  updatedAt: number;
  text: string;
  isPublic: boolean;
}

export interface DummyCreateOneInput {
  text: string;
  isPublic: boolean;
}

export interface DummyUpdateOneInput {
  id: string;
  text: string;
}

export interface DummyFindOneInput {
  id: string;
}

export interface DummyRemoveOneInput {
  id: string;
}

export interface DummySearchFilter {
  text: string;
}

export interface DummySearchOpts {
  limit: number;
  offset: number;
  waitForSync: boolean;
}

export interface DummySearchInput {
  filter: DummySearchFilter | undefined;
  opts: DummySearchOpts | undefined;
}

export interface DummySearchResultMeta {
  offset: number;
}

export interface DummySearchResult {
  meta: DummySearchResultMeta | undefined;
  results: Dummy[];
}

export interface DummyJobPayload {
  id: string;
}

export interface PublishJobInput {
  dummyJobPayload: DummyJobPayload | undefined;
}

export interface Provider {
  id: string;
  createdAt: number;
  updatedAt: number;
  userId: string;
  name: string;
  description: string;
  photo: string;
  onboardingFlags: ProviderOnboardingFlags | undefined;
}

export interface ProviderOnboardingFlags {
  initial: boolean;
}

export interface ProviderCreateOneInput {
  userId: string;
  name: string;
  description: string;
  photo: string;
  onboardingFlags: ProviderOnboardingFlags | undefined;
}

export interface ProviderUpdateOneInput {
  id: string;
  userId: string;
  name: string;
  description: string;
  photo: string;
  onboardingFlags: ProviderOnboardingFlags | undefined;
}

export interface ProviderFindOneInput {
  id: string;
}

export interface ProviderFindByUserInput {
  userId: string;
}

export interface ProviderRemoveOneInput {
  id: string;
}

export interface ProviderSearchFilter {
  name: string;
}

export interface ProviderSearchOpts {
  limit: number;
  offset: number;
  waitForSync: boolean;
}

export interface ProviderSearchInput {
  filter: ProviderSearchFilter | undefined;
  opts: ProviderSearchOpts | undefined;
}

export interface ProviderSearchResultMeta {
  offset: number;
}

export interface ProviderSearchResult {
  meta: ProviderSearchResultMeta | undefined;
  providers: Provider[];
}

export interface Login {
  id: string;
  createdAt: number;
  updatedAt: number;
  platform: string;
  platformLoginId: string;
  platformLoginSecret: string;
  userId: string;
  isNew: boolean;
  credentials: Credentials | undefined;
}

export interface Credentials {
  local?: LocalCredentials | undefined;
  google?: GoogleCredentials | undefined;
}

export interface LocalCredentials {
  username: string;
  password: string;
}

export interface GoogleCredentials {
  id: string;
}

export interface LoginCreateOneInput {
  platform: string;
  platformLoginId: string;
  platformLoginSecret: string;
  userId: string;
  credentials: Credentials | undefined;
}

export interface LoginUpdateOneInput {
  id: string;
  platform: string;
  platformLoginId: string;
  platformLoginSecret: string;
  userId: string;
  credentials: Credentials | undefined;
}

export interface LoginFindOneInput {
  id: string;
}

export interface LoginFindWhereInput {
  platform: string;
  platformLoginId: string;
  platformLoginSecret: string;
}

export interface LoginFindByPlatformIdInput {
  platform: string;
  platformLoginId: string;
}

export interface LoginRemoveOneInput {
  id: string;
}

export interface User {
  id: string;
  createdAt: number;
  updatedAt: number;
  name: string;
  email: string;
  photo: string;
  onboardingFlags: UserOnboardingFlags | undefined;
}

export interface UserOnboardingFlags {
  initial: boolean;
}

export interface UserCreateOneInput {
  name: string;
  email: string;
  photo: string;
  onboardingFlags: UserOnboardingFlags | undefined;
}

export interface UserUpdateOneInput {
  id: string;
  name: string;
  email: string;
  photo: string;
  onboardingFlags: UserOnboardingFlags | undefined;
}

export interface UserFindOneInput {
  id: string;
}

export interface UserRemoveOneInput {
  id: string;
}

export interface UserSearchFilter {
  name: string;
}

export interface UserSearchOpts {
  limit: number;
  offset: number;
  waitForSync: boolean;
}

export interface UserSearchInput {
  filter: UserSearchFilter | undefined;
  opts: UserSearchOpts | undefined;
}

export interface UserSearchResultMeta {
  offset: number;
}

export interface UserSearchResult {
  meta: UserSearchResultMeta | undefined;
  users: User[];
}

export interface HealthCheckResult {
  ok: boolean;
}

export interface IntRange {
  min: number;
  max: number;
}

export interface Conversation {
  id: string;
  createdAt: number;
  updatedAt: number;
  name: string;
  description: string;
  lastMessageAt: number;
}

export interface ConversationCreateOneInput {
  name: string;
  description: string;
}

export interface ConversationUpdateOneInput {
  id: string;
  name: string;
  description: string;
  lastMessageAt: number;
}

export interface ConversationFindOneInput {
  id: string;
}

export interface ConversationRemoveOneInput {
  id: string;
}

export interface ConversationFindByParticipantFilter {
  participantId: string;
  fromLastMessageAt: number;
}

export interface ConversationFindByParticipantOpts {
  limit: number;
  offset: number;
}

export interface ConversationFindByParticipantInput {
  filter: ConversationFindByParticipantFilter | undefined;
  opts: ConversationFindByParticipantOpts | undefined;
}

export interface ConversationFindByParticipantResultMeta {
  offset: number;
}

export interface ConversationFindByParticipantResult {
  meta: ConversationFindByParticipantResultMeta | undefined;
  results: Conversation[];
}

export interface ConversationParticipant {
  id: string;
  createdAt: number;
  updatedAt: number;
  conversationId: string;
  participantId: string;
  writeableAs: AuthorizableAs | undefined;
}

export interface ConversationParticipantCreateOneInput {
  conversationId: string;
  participantId: string;
}

export interface ConversationParticipantFindOneInput {
  id: string;
}

export interface ConversationParticipantRemoveOneInput {
  id: string;
}

export interface ConversationParticipantFindByConversationFilter {
  conversationId: string;
}

export interface ConversationParticipantFindByConversationOpts {
  limit: number;
  offset: number;
}

export interface ConversationParticipantFindByConversationInput {
  filter: ConversationParticipantFindByConversationFilter | undefined;
  opts: ConversationParticipantFindByConversationOpts | undefined;
}

export interface ConversationParticipantFindByConversationResultMeta {
  offset: number;
}

export interface ConversationParticipantFindByConversationResult {
  meta: ConversationParticipantFindByConversationResultMeta | undefined;
  results: ConversationParticipant[];
}

export interface Message {
  id: string;
  createdAt: number;
  updatedAt: number;
  conversationId: string;
  media: MessageMedia | undefined;
  senderId: string;
  sentToIds: string[];
  receivedByIds: string[];
  seenByIds: string[];
  deleted: boolean;
  uniqueness: string;
}

export interface MessageMedia {
  text: string;
}

export interface MessageCreateOneInput {
  conversationId: string;
  media: MessageMedia | undefined;
  senderId: string;
  uniqueness: string;
}

export interface MessageUpdateOneInput {
  id: string;
  media: MessageMedia | undefined;
}

export interface MessageFindOneInput {
  id: string;
}

export interface MessageFindUniqueInput {
  uniqueness: string;
}

export interface MessageRemoveOneInput {
  id: string;
}

export interface MessageFindByConversationFilter {
  conversationId: string;
}

export interface MessageFindByConversationOpts {
  limit: number;
  offset: number;
}

export interface MessageFindByConversationInput {
  filter: MessageFindByConversationFilter | undefined;
  opts: MessageFindByConversationOpts | undefined;
}

export interface MessageFindByConversationResultMeta {
  offset: number;
}

export interface MessageFindByConversationResult {
  meta: MessageFindByConversationResultMeta | undefined;
  results: Message[];
}

export interface MessageJobPayload {
  id: string;
}

export interface Permission {
  id: string;
  createdAt: number;
  updatedAt: number;
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface AuthorizableAs {
  entity: string;
  entityId: string;
}

export interface Permissions {
  permissions: Permission[];
}

export interface PermissionCreateOneInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface PermissionCreateManyInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityIds: string[];
  action: string;
}

export interface PermissionFindOneInput {
  id: string;
}

export interface PermissionFindWhereInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface PermissionFindWhereManyInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityIds: string[];
  action: string;
}

export interface PermissionFindWhereOrStarInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface Permitted {
  permittedEntity: string;
  permittedEntityId: string;
}

export interface PermissionValidateOneInput {
  entity: string;
  entityId: string;
  action: string;
  permitted: Permitted[];
}

export interface PermissionValidateOneResult {
  validated: boolean;
}

export interface PermissionRemoveOneInput {
  id: string;
}

export interface PermissionRemoveWhereInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface PermissionRemoveWhereManyInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityIds: string[];
  action: string;
}

export interface PermissionFindByPermittedFilter {
  permittedEntity: string;
  permittedEntityId: string;
}

export interface PermissionFindByPermittedOpts {
  limit: number;
  offset: number;
}

export interface PermissionFindByPermittedInput {
  filter: PermissionFindByPermittedFilter | undefined;
  opts: PermissionFindByPermittedOpts | undefined;
}

export interface PermissionFindByPermittedResultMeta {
  offset: number;
}

export interface PermissionFindByPermittedResult {
  meta: PermissionFindByPermittedResultMeta | undefined;
  results: Permission[];
}

export interface PermissionFindByEntityFilter {
  entity: string;
  entityId: string;
  action: string;
}

export interface PermissionFindByEntityOpts {
  limit: number;
  offset: number;
}

export interface PermissionFindByEntityInput {
  filter: PermissionFindByEntityFilter | undefined;
  opts: PermissionFindByEntityOpts | undefined;
}

export interface PermissionFindByEntityResultMeta {
  offset: number;
}

export interface PermissionFindByEntityResult {
  meta: PermissionFindByEntityResultMeta | undefined;
  results: Permission[];
}

export interface PermissionFindAllActionsFilter {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
}

export interface PermissionFindAllActionsOpts {
  limit: number;
  offset: number;
}

export interface PermissionFindAllActionsInput {
  filter: PermissionFindAllActionsFilter | undefined;
  opts: PermissionFindAllActionsOpts | undefined;
}

export interface PermissionFindAllActionsResultMeta {
  offset: number;
}

export interface PermissionFindAllActionsResult {
  meta: PermissionFindAllActionsResultMeta | undefined;
  results: Permission[];
}

export interface PermissionRemoveAllActionsFilter {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
}

export interface PermissionRemoveAllActionsInput {
  filter: PermissionRemoveAllActionsFilter | undefined;
}

export interface UserFollowCreateOneInput {
  followerId: string;
  followeeId: string;
}

export interface UserFollowRemoveOneInput {
  id: string;
}

export interface UserFindFollowersFilter {
  followeeId: string;
}

export interface UserFindFollowersOpts {
  limit: number;
  offset: number;
}

export interface UserFindFollowersInput {
  filter: UserFindFollowersFilter | undefined;
  opts: UserFindFollowersOpts | undefined;
}

export interface UserFindFollowersResultMeta {
  offset: number;
}

export interface UserFindFollowersResult {
  meta: UserFindFollowersResultMeta | undefined;
  followers: Follower[];
}

export interface Follower {
  id: string;
  createdAt: number;
  updatedAt: number;
  followeeId: string;
  followerId: string;
}

export interface UserFindFolloweesFilter {
  followerId: string;
}

export interface UserFindFolloweesOpts {
  limit: number;
  offset: number;
}

export interface UserFindFolloweesInput {
  filter: UserFindFolloweesFilter | undefined;
  opts: UserFindFolloweesOpts | undefined;
}

export interface UserFindFolloweesResultMeta {
  offset: number;
}

export interface UserFindFolloweesResult {
  meta: UserFindFolloweesResultMeta | undefined;
  followees: Followee[];
}

export interface Followee {
  id: string;
  createdAt: number;
  updatedAt: number;
  followerId: string;
  followeeId: string;
}

export interface PublishJobResult {
  jobId: string;
}

export interface WorkersHealthCheckResult {
  ok: boolean;
}

function createBaseDummy(): Dummy {
  return { id: "", createdAt: 0, updatedAt: 0, text: "", isPublic: false };
}

export const Dummy = {
  encode(message: Dummy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.text !== "") {
      writer.uint32(34).string(message.text);
    }
    if (message.isPublic === true) {
      writer.uint32(40).bool(message.isPublic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dummy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.text = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.isPublic = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Dummy {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      text: isSet(object.text) ? String(object.text) : "",
      isPublic: isSet(object.isPublic) ? Boolean(object.isPublic) : false,
    };
  },

  toJSON(message: Dummy): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.text !== "") {
      obj.text = message.text;
    }
    if (message.isPublic === true) {
      obj.isPublic = message.isPublic;
    }
    return obj;
  },

  create(base?: DeepPartial<Dummy>): Dummy {
    return Dummy.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Dummy>): Dummy {
    const message = createBaseDummy();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.text = object.text ?? "";
    message.isPublic = object.isPublic ?? false;
    return message;
  },
};

function createBaseDummyCreateOneInput(): DummyCreateOneInput {
  return { text: "", isPublic: false };
}

export const DummyCreateOneInput = {
  encode(message: DummyCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    if (message.isPublic === true) {
      writer.uint32(40).bool(message.isPublic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummyCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummyCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.text = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.isPublic = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummyCreateOneInput {
    return {
      text: isSet(object.text) ? String(object.text) : "",
      isPublic: isSet(object.isPublic) ? Boolean(object.isPublic) : false,
    };
  },

  toJSON(message: DummyCreateOneInput): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    if (message.isPublic === true) {
      obj.isPublic = message.isPublic;
    }
    return obj;
  },

  create(base?: DeepPartial<DummyCreateOneInput>): DummyCreateOneInput {
    return DummyCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DummyCreateOneInput>): DummyCreateOneInput {
    const message = createBaseDummyCreateOneInput();
    message.text = object.text ?? "";
    message.isPublic = object.isPublic ?? false;
    return message;
  },
};

function createBaseDummyUpdateOneInput(): DummyUpdateOneInput {
  return { id: "", text: "" };
}

export const DummyUpdateOneInput = {
  encode(message: DummyUpdateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummyUpdateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummyUpdateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummyUpdateOneInput {
    return { id: isSet(object.id) ? String(object.id) : "", text: isSet(object.text) ? String(object.text) : "" };
  },

  toJSON(message: DummyUpdateOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create(base?: DeepPartial<DummyUpdateOneInput>): DummyUpdateOneInput {
    return DummyUpdateOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DummyUpdateOneInput>): DummyUpdateOneInput {
    const message = createBaseDummyUpdateOneInput();
    message.id = object.id ?? "";
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseDummyFindOneInput(): DummyFindOneInput {
  return { id: "" };
}

export const DummyFindOneInput = {
  encode(message: DummyFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummyFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummyFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummyFindOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DummyFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<DummyFindOneInput>): DummyFindOneInput {
    return DummyFindOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DummyFindOneInput>): DummyFindOneInput {
    const message = createBaseDummyFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDummyRemoveOneInput(): DummyRemoveOneInput {
  return { id: "" };
}

export const DummyRemoveOneInput = {
  encode(message: DummyRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummyRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummyRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummyRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DummyRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<DummyRemoveOneInput>): DummyRemoveOneInput {
    return DummyRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DummyRemoveOneInput>): DummyRemoveOneInput {
    const message = createBaseDummyRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDummySearchFilter(): DummySearchFilter {
  return { text: "" };
}

export const DummySearchFilter = {
  encode(message: DummySearchFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummySearchFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummySearchFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummySearchFilter {
    return { text: isSet(object.text) ? String(object.text) : "" };
  },

  toJSON(message: DummySearchFilter): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create(base?: DeepPartial<DummySearchFilter>): DummySearchFilter {
    return DummySearchFilter.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DummySearchFilter>): DummySearchFilter {
    const message = createBaseDummySearchFilter();
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseDummySearchOpts(): DummySearchOpts {
  return { limit: 0, offset: 0, waitForSync: false };
}

export const DummySearchOpts = {
  encode(message: DummySearchOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    if (message.waitForSync === true) {
      writer.uint32(24).bool(message.waitForSync);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummySearchOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummySearchOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.waitForSync = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummySearchOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      waitForSync: isSet(object.waitForSync) ? Boolean(object.waitForSync) : false,
    };
  },

  toJSON(message: DummySearchOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    if (message.waitForSync === true) {
      obj.waitForSync = message.waitForSync;
    }
    return obj;
  },

  create(base?: DeepPartial<DummySearchOpts>): DummySearchOpts {
    return DummySearchOpts.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DummySearchOpts>): DummySearchOpts {
    const message = createBaseDummySearchOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    message.waitForSync = object.waitForSync ?? false;
    return message;
  },
};

function createBaseDummySearchInput(): DummySearchInput {
  return { filter: undefined, opts: undefined };
}

export const DummySearchInput = {
  encode(message: DummySearchInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      DummySearchFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      DummySearchOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummySearchInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummySearchInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = DummySearchFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = DummySearchOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummySearchInput {
    return {
      filter: isSet(object.filter) ? DummySearchFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? DummySearchOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: DummySearchInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = DummySearchFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = DummySearchOpts.toJSON(message.opts);
    }
    return obj;
  },

  create(base?: DeepPartial<DummySearchInput>): DummySearchInput {
    return DummySearchInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DummySearchInput>): DummySearchInput {
    const message = createBaseDummySearchInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? DummySearchFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? DummySearchOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseDummySearchResultMeta(): DummySearchResultMeta {
  return { offset: 0 };
}

export const DummySearchResultMeta = {
  encode(message: DummySearchResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummySearchResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummySearchResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummySearchResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: DummySearchResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create(base?: DeepPartial<DummySearchResultMeta>): DummySearchResultMeta {
    return DummySearchResultMeta.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DummySearchResultMeta>): DummySearchResultMeta {
    const message = createBaseDummySearchResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseDummySearchResult(): DummySearchResult {
  return { meta: undefined, results: [] };
}

export const DummySearchResult = {
  encode(message: DummySearchResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      DummySearchResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Dummy.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummySearchResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummySearchResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = DummySearchResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(Dummy.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummySearchResult {
    return {
      meta: isSet(object.meta) ? DummySearchResultMeta.fromJSON(object.meta) : undefined,
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Dummy.fromJSON(e)) : [],
    };
  },

  toJSON(message: DummySearchResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = DummySearchResultMeta.toJSON(message.meta);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => Dummy.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<DummySearchResult>): DummySearchResult {
    return DummySearchResult.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DummySearchResult>): DummySearchResult {
    const message = createBaseDummySearchResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? DummySearchResultMeta.fromPartial(object.meta)
      : undefined;
    message.results = object.results?.map((e) => Dummy.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDummyJobPayload(): DummyJobPayload {
  return { id: "" };
}

export const DummyJobPayload = {
  encode(message: DummyJobPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummyJobPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummyJobPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummyJobPayload {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DummyJobPayload): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<DummyJobPayload>): DummyJobPayload {
    return DummyJobPayload.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DummyJobPayload>): DummyJobPayload {
    const message = createBaseDummyJobPayload();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePublishJobInput(): PublishJobInput {
  return { dummyJobPayload: undefined };
}

export const PublishJobInput = {
  encode(message: PublishJobInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dummyJobPayload !== undefined) {
      DummyJobPayload.encode(message.dummyJobPayload, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishJobInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishJobInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 10:
          if (tag !== 82) {
            break;
          }

          message.dummyJobPayload = DummyJobPayload.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublishJobInput {
    return {
      dummyJobPayload: isSet(object.dummyJobPayload) ? DummyJobPayload.fromJSON(object.dummyJobPayload) : undefined,
    };
  },

  toJSON(message: PublishJobInput): unknown {
    const obj: any = {};
    if (message.dummyJobPayload !== undefined) {
      obj.dummyJobPayload = DummyJobPayload.toJSON(message.dummyJobPayload);
    }
    return obj;
  },

  create(base?: DeepPartial<PublishJobInput>): PublishJobInput {
    return PublishJobInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PublishJobInput>): PublishJobInput {
    const message = createBasePublishJobInput();
    message.dummyJobPayload = (object.dummyJobPayload !== undefined && object.dummyJobPayload !== null)
      ? DummyJobPayload.fromPartial(object.dummyJobPayload)
      : undefined;
    return message;
  },
};

function createBaseProvider(): Provider {
  return {
    id: "",
    createdAt: 0,
    updatedAt: 0,
    userId: "",
    name: "",
    description: "",
    photo: "",
    onboardingFlags: undefined,
  };
}

export const Provider = {
  encode(message: Provider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.userId !== "") {
      writer.uint32(34).string(message.userId);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.photo !== "") {
      writer.uint32(58).string(message.photo);
    }
    if (message.onboardingFlags !== undefined) {
      ProviderOnboardingFlags.encode(message.onboardingFlags, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Provider {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.name = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.photo = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.onboardingFlags = ProviderOnboardingFlags.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Provider {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      userId: isSet(object.userId) ? String(object.userId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      photo: isSet(object.photo) ? String(object.photo) : "",
      onboardingFlags: isSet(object.onboardingFlags)
        ? ProviderOnboardingFlags.fromJSON(object.onboardingFlags)
        : undefined,
    };
  },

  toJSON(message: Provider): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.photo !== "") {
      obj.photo = message.photo;
    }
    if (message.onboardingFlags !== undefined) {
      obj.onboardingFlags = ProviderOnboardingFlags.toJSON(message.onboardingFlags);
    }
    return obj;
  },

  create(base?: DeepPartial<Provider>): Provider {
    return Provider.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Provider>): Provider {
    const message = createBaseProvider();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.userId = object.userId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.photo = object.photo ?? "";
    message.onboardingFlags = (object.onboardingFlags !== undefined && object.onboardingFlags !== null)
      ? ProviderOnboardingFlags.fromPartial(object.onboardingFlags)
      : undefined;
    return message;
  },
};

function createBaseProviderOnboardingFlags(): ProviderOnboardingFlags {
  return { initial: false };
}

export const ProviderOnboardingFlags = {
  encode(message: ProviderOnboardingFlags, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initial === true) {
      writer.uint32(8).bool(message.initial);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderOnboardingFlags {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderOnboardingFlags();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.initial = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderOnboardingFlags {
    return { initial: isSet(object.initial) ? Boolean(object.initial) : false };
  },

  toJSON(message: ProviderOnboardingFlags): unknown {
    const obj: any = {};
    if (message.initial === true) {
      obj.initial = message.initial;
    }
    return obj;
  },

  create(base?: DeepPartial<ProviderOnboardingFlags>): ProviderOnboardingFlags {
    return ProviderOnboardingFlags.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProviderOnboardingFlags>): ProviderOnboardingFlags {
    const message = createBaseProviderOnboardingFlags();
    message.initial = object.initial ?? false;
    return message;
  },
};

function createBaseProviderCreateOneInput(): ProviderCreateOneInput {
  return { userId: "", name: "", description: "", photo: "", onboardingFlags: undefined };
}

export const ProviderCreateOneInput = {
  encode(message: ProviderCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(34).string(message.userId);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.photo !== "") {
      writer.uint32(58).string(message.photo);
    }
    if (message.onboardingFlags !== undefined) {
      ProviderOnboardingFlags.encode(message.onboardingFlags, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.name = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.photo = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.onboardingFlags = ProviderOnboardingFlags.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderCreateOneInput {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      photo: isSet(object.photo) ? String(object.photo) : "",
      onboardingFlags: isSet(object.onboardingFlags)
        ? ProviderOnboardingFlags.fromJSON(object.onboardingFlags)
        : undefined,
    };
  },

  toJSON(message: ProviderCreateOneInput): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.photo !== "") {
      obj.photo = message.photo;
    }
    if (message.onboardingFlags !== undefined) {
      obj.onboardingFlags = ProviderOnboardingFlags.toJSON(message.onboardingFlags);
    }
    return obj;
  },

  create(base?: DeepPartial<ProviderCreateOneInput>): ProviderCreateOneInput {
    return ProviderCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProviderCreateOneInput>): ProviderCreateOneInput {
    const message = createBaseProviderCreateOneInput();
    message.userId = object.userId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.photo = object.photo ?? "";
    message.onboardingFlags = (object.onboardingFlags !== undefined && object.onboardingFlags !== null)
      ? ProviderOnboardingFlags.fromPartial(object.onboardingFlags)
      : undefined;
    return message;
  },
};

function createBaseProviderUpdateOneInput(): ProviderUpdateOneInput {
  return { id: "", userId: "", name: "", description: "", photo: "", onboardingFlags: undefined };
}

export const ProviderUpdateOneInput = {
  encode(message: ProviderUpdateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.userId !== "") {
      writer.uint32(34).string(message.userId);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.photo !== "") {
      writer.uint32(58).string(message.photo);
    }
    if (message.onboardingFlags !== undefined) {
      ProviderOnboardingFlags.encode(message.onboardingFlags, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderUpdateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderUpdateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.name = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.photo = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.onboardingFlags = ProviderOnboardingFlags.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderUpdateOneInput {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      photo: isSet(object.photo) ? String(object.photo) : "",
      onboardingFlags: isSet(object.onboardingFlags)
        ? ProviderOnboardingFlags.fromJSON(object.onboardingFlags)
        : undefined,
    };
  },

  toJSON(message: ProviderUpdateOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.photo !== "") {
      obj.photo = message.photo;
    }
    if (message.onboardingFlags !== undefined) {
      obj.onboardingFlags = ProviderOnboardingFlags.toJSON(message.onboardingFlags);
    }
    return obj;
  },

  create(base?: DeepPartial<ProviderUpdateOneInput>): ProviderUpdateOneInput {
    return ProviderUpdateOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProviderUpdateOneInput>): ProviderUpdateOneInput {
    const message = createBaseProviderUpdateOneInput();
    message.id = object.id ?? "";
    message.userId = object.userId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.photo = object.photo ?? "";
    message.onboardingFlags = (object.onboardingFlags !== undefined && object.onboardingFlags !== null)
      ? ProviderOnboardingFlags.fromPartial(object.onboardingFlags)
      : undefined;
    return message;
  },
};

function createBaseProviderFindOneInput(): ProviderFindOneInput {
  return { id: "" };
}

export const ProviderFindOneInput = {
  encode(message: ProviderFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderFindOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: ProviderFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<ProviderFindOneInput>): ProviderFindOneInput {
    return ProviderFindOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProviderFindOneInput>): ProviderFindOneInput {
    const message = createBaseProviderFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseProviderFindByUserInput(): ProviderFindByUserInput {
  return { userId: "" };
}

export const ProviderFindByUserInput = {
  encode(message: ProviderFindByUserInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderFindByUserInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderFindByUserInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderFindByUserInput {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: ProviderFindByUserInput): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create(base?: DeepPartial<ProviderFindByUserInput>): ProviderFindByUserInput {
    return ProviderFindByUserInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProviderFindByUserInput>): ProviderFindByUserInput {
    const message = createBaseProviderFindByUserInput();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseProviderRemoveOneInput(): ProviderRemoveOneInput {
  return { id: "" };
}

export const ProviderRemoveOneInput = {
  encode(message: ProviderRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: ProviderRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<ProviderRemoveOneInput>): ProviderRemoveOneInput {
    return ProviderRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProviderRemoveOneInput>): ProviderRemoveOneInput {
    const message = createBaseProviderRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseProviderSearchFilter(): ProviderSearchFilter {
  return { name: "" };
}

export const ProviderSearchFilter = {
  encode(message: ProviderSearchFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderSearchFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderSearchFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderSearchFilter {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: ProviderSearchFilter): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<ProviderSearchFilter>): ProviderSearchFilter {
    return ProviderSearchFilter.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProviderSearchFilter>): ProviderSearchFilter {
    const message = createBaseProviderSearchFilter();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseProviderSearchOpts(): ProviderSearchOpts {
  return { limit: 0, offset: 0, waitForSync: false };
}

export const ProviderSearchOpts = {
  encode(message: ProviderSearchOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    if (message.waitForSync === true) {
      writer.uint32(24).bool(message.waitForSync);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderSearchOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderSearchOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.waitForSync = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderSearchOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      waitForSync: isSet(object.waitForSync) ? Boolean(object.waitForSync) : false,
    };
  },

  toJSON(message: ProviderSearchOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    if (message.waitForSync === true) {
      obj.waitForSync = message.waitForSync;
    }
    return obj;
  },

  create(base?: DeepPartial<ProviderSearchOpts>): ProviderSearchOpts {
    return ProviderSearchOpts.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProviderSearchOpts>): ProviderSearchOpts {
    const message = createBaseProviderSearchOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    message.waitForSync = object.waitForSync ?? false;
    return message;
  },
};

function createBaseProviderSearchInput(): ProviderSearchInput {
  return { filter: undefined, opts: undefined };
}

export const ProviderSearchInput = {
  encode(message: ProviderSearchInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      ProviderSearchFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      ProviderSearchOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderSearchInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderSearchInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = ProviderSearchFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = ProviderSearchOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderSearchInput {
    return {
      filter: isSet(object.filter) ? ProviderSearchFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? ProviderSearchOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: ProviderSearchInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = ProviderSearchFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = ProviderSearchOpts.toJSON(message.opts);
    }
    return obj;
  },

  create(base?: DeepPartial<ProviderSearchInput>): ProviderSearchInput {
    return ProviderSearchInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProviderSearchInput>): ProviderSearchInput {
    const message = createBaseProviderSearchInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? ProviderSearchFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? ProviderSearchOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseProviderSearchResultMeta(): ProviderSearchResultMeta {
  return { offset: 0 };
}

export const ProviderSearchResultMeta = {
  encode(message: ProviderSearchResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderSearchResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderSearchResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderSearchResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: ProviderSearchResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create(base?: DeepPartial<ProviderSearchResultMeta>): ProviderSearchResultMeta {
    return ProviderSearchResultMeta.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProviderSearchResultMeta>): ProviderSearchResultMeta {
    const message = createBaseProviderSearchResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseProviderSearchResult(): ProviderSearchResult {
  return { meta: undefined, providers: [] };
}

export const ProviderSearchResult = {
  encode(message: ProviderSearchResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      ProviderSearchResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.providers) {
      Provider.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderSearchResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderSearchResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = ProviderSearchResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.providers.push(Provider.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderSearchResult {
    return {
      meta: isSet(object.meta) ? ProviderSearchResultMeta.fromJSON(object.meta) : undefined,
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => Provider.fromJSON(e)) : [],
    };
  },

  toJSON(message: ProviderSearchResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = ProviderSearchResultMeta.toJSON(message.meta);
    }
    if (message.providers?.length) {
      obj.providers = message.providers.map((e) => Provider.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ProviderSearchResult>): ProviderSearchResult {
    return ProviderSearchResult.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProviderSearchResult>): ProviderSearchResult {
    const message = createBaseProviderSearchResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? ProviderSearchResultMeta.fromPartial(object.meta)
      : undefined;
    message.providers = object.providers?.map((e) => Provider.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLogin(): Login {
  return {
    id: "",
    createdAt: 0,
    updatedAt: 0,
    platform: "",
    platformLoginId: "",
    platformLoginSecret: "",
    userId: "",
    isNew: false,
    credentials: undefined,
  };
}

export const Login = {
  encode(message: Login, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.platform !== "") {
      writer.uint32(34).string(message.platform);
    }
    if (message.platformLoginId !== "") {
      writer.uint32(42).string(message.platformLoginId);
    }
    if (message.platformLoginSecret !== "") {
      writer.uint32(50).string(message.platformLoginSecret);
    }
    if (message.userId !== "") {
      writer.uint32(58).string(message.userId);
    }
    if (message.isNew === true) {
      writer.uint32(64).bool(message.isNew);
    }
    if (message.credentials !== undefined) {
      Credentials.encode(message.credentials, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Login {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.platformLoginId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.platformLoginSecret = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.isNew = reader.bool();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.credentials = Credentials.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Login {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      platform: isSet(object.platform) ? String(object.platform) : "",
      platformLoginId: isSet(object.platformLoginId) ? String(object.platformLoginId) : "",
      platformLoginSecret: isSet(object.platformLoginSecret) ? String(object.platformLoginSecret) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
      isNew: isSet(object.isNew) ? Boolean(object.isNew) : false,
      credentials: isSet(object.credentials) ? Credentials.fromJSON(object.credentials) : undefined,
    };
  },

  toJSON(message: Login): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.platform !== "") {
      obj.platform = message.platform;
    }
    if (message.platformLoginId !== "") {
      obj.platformLoginId = message.platformLoginId;
    }
    if (message.platformLoginSecret !== "") {
      obj.platformLoginSecret = message.platformLoginSecret;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.isNew === true) {
      obj.isNew = message.isNew;
    }
    if (message.credentials !== undefined) {
      obj.credentials = Credentials.toJSON(message.credentials);
    }
    return obj;
  },

  create(base?: DeepPartial<Login>): Login {
    return Login.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Login>): Login {
    const message = createBaseLogin();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.platform = object.platform ?? "";
    message.platformLoginId = object.platformLoginId ?? "";
    message.platformLoginSecret = object.platformLoginSecret ?? "";
    message.userId = object.userId ?? "";
    message.isNew = object.isNew ?? false;
    message.credentials = (object.credentials !== undefined && object.credentials !== null)
      ? Credentials.fromPartial(object.credentials)
      : undefined;
    return message;
  },
};

function createBaseCredentials(): Credentials {
  return { local: undefined, google: undefined };
}

export const Credentials = {
  encode(message: Credentials, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.local !== undefined) {
      LocalCredentials.encode(message.local, writer.uint32(10).fork()).ldelim();
    }
    if (message.google !== undefined) {
      GoogleCredentials.encode(message.google, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Credentials {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCredentials();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.local = LocalCredentials.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.google = GoogleCredentials.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Credentials {
    return {
      local: isSet(object.local) ? LocalCredentials.fromJSON(object.local) : undefined,
      google: isSet(object.google) ? GoogleCredentials.fromJSON(object.google) : undefined,
    };
  },

  toJSON(message: Credentials): unknown {
    const obj: any = {};
    if (message.local !== undefined) {
      obj.local = LocalCredentials.toJSON(message.local);
    }
    if (message.google !== undefined) {
      obj.google = GoogleCredentials.toJSON(message.google);
    }
    return obj;
  },

  create(base?: DeepPartial<Credentials>): Credentials {
    return Credentials.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Credentials>): Credentials {
    const message = createBaseCredentials();
    message.local = (object.local !== undefined && object.local !== null)
      ? LocalCredentials.fromPartial(object.local)
      : undefined;
    message.google = (object.google !== undefined && object.google !== null)
      ? GoogleCredentials.fromPartial(object.google)
      : undefined;
    return message;
  },
};

function createBaseLocalCredentials(): LocalCredentials {
  return { username: "", password: "" };
}

export const LocalCredentials = {
  encode(message: LocalCredentials, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocalCredentials {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalCredentials();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LocalCredentials {
    return {
      username: isSet(object.username) ? String(object.username) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: LocalCredentials): unknown {
    const obj: any = {};
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create(base?: DeepPartial<LocalCredentials>): LocalCredentials {
    return LocalCredentials.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LocalCredentials>): LocalCredentials {
    const message = createBaseLocalCredentials();
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseGoogleCredentials(): GoogleCredentials {
  return { id: "" };
}

export const GoogleCredentials = {
  encode(message: GoogleCredentials, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GoogleCredentials {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGoogleCredentials();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GoogleCredentials {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: GoogleCredentials): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<GoogleCredentials>): GoogleCredentials {
    return GoogleCredentials.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GoogleCredentials>): GoogleCredentials {
    const message = createBaseGoogleCredentials();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseLoginCreateOneInput(): LoginCreateOneInput {
  return { platform: "", platformLoginId: "", platformLoginSecret: "", userId: "", credentials: undefined };
}

export const LoginCreateOneInput = {
  encode(message: LoginCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.platform !== "") {
      writer.uint32(34).string(message.platform);
    }
    if (message.platformLoginId !== "") {
      writer.uint32(42).string(message.platformLoginId);
    }
    if (message.platformLoginSecret !== "") {
      writer.uint32(50).string(message.platformLoginSecret);
    }
    if (message.userId !== "") {
      writer.uint32(58).string(message.userId);
    }
    if (message.credentials !== undefined) {
      Credentials.encode(message.credentials, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.platformLoginId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.platformLoginSecret = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.credentials = Credentials.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginCreateOneInput {
    return {
      platform: isSet(object.platform) ? String(object.platform) : "",
      platformLoginId: isSet(object.platformLoginId) ? String(object.platformLoginId) : "",
      platformLoginSecret: isSet(object.platformLoginSecret) ? String(object.platformLoginSecret) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
      credentials: isSet(object.credentials) ? Credentials.fromJSON(object.credentials) : undefined,
    };
  },

  toJSON(message: LoginCreateOneInput): unknown {
    const obj: any = {};
    if (message.platform !== "") {
      obj.platform = message.platform;
    }
    if (message.platformLoginId !== "") {
      obj.platformLoginId = message.platformLoginId;
    }
    if (message.platformLoginSecret !== "") {
      obj.platformLoginSecret = message.platformLoginSecret;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.credentials !== undefined) {
      obj.credentials = Credentials.toJSON(message.credentials);
    }
    return obj;
  },

  create(base?: DeepPartial<LoginCreateOneInput>): LoginCreateOneInput {
    return LoginCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LoginCreateOneInput>): LoginCreateOneInput {
    const message = createBaseLoginCreateOneInput();
    message.platform = object.platform ?? "";
    message.platformLoginId = object.platformLoginId ?? "";
    message.platformLoginSecret = object.platformLoginSecret ?? "";
    message.userId = object.userId ?? "";
    message.credentials = (object.credentials !== undefined && object.credentials !== null)
      ? Credentials.fromPartial(object.credentials)
      : undefined;
    return message;
  },
};

function createBaseLoginUpdateOneInput(): LoginUpdateOneInput {
  return { id: "", platform: "", platformLoginId: "", platformLoginSecret: "", userId: "", credentials: undefined };
}

export const LoginUpdateOneInput = {
  encode(message: LoginUpdateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.platform !== "") {
      writer.uint32(34).string(message.platform);
    }
    if (message.platformLoginId !== "") {
      writer.uint32(42).string(message.platformLoginId);
    }
    if (message.platformLoginSecret !== "") {
      writer.uint32(50).string(message.platformLoginSecret);
    }
    if (message.userId !== "") {
      writer.uint32(58).string(message.userId);
    }
    if (message.credentials !== undefined) {
      Credentials.encode(message.credentials, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginUpdateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginUpdateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.platformLoginId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.platformLoginSecret = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.credentials = Credentials.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginUpdateOneInput {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      platform: isSet(object.platform) ? String(object.platform) : "",
      platformLoginId: isSet(object.platformLoginId) ? String(object.platformLoginId) : "",
      platformLoginSecret: isSet(object.platformLoginSecret) ? String(object.platformLoginSecret) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
      credentials: isSet(object.credentials) ? Credentials.fromJSON(object.credentials) : undefined,
    };
  },

  toJSON(message: LoginUpdateOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.platform !== "") {
      obj.platform = message.platform;
    }
    if (message.platformLoginId !== "") {
      obj.platformLoginId = message.platformLoginId;
    }
    if (message.platformLoginSecret !== "") {
      obj.platformLoginSecret = message.platformLoginSecret;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.credentials !== undefined) {
      obj.credentials = Credentials.toJSON(message.credentials);
    }
    return obj;
  },

  create(base?: DeepPartial<LoginUpdateOneInput>): LoginUpdateOneInput {
    return LoginUpdateOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LoginUpdateOneInput>): LoginUpdateOneInput {
    const message = createBaseLoginUpdateOneInput();
    message.id = object.id ?? "";
    message.platform = object.platform ?? "";
    message.platformLoginId = object.platformLoginId ?? "";
    message.platformLoginSecret = object.platformLoginSecret ?? "";
    message.userId = object.userId ?? "";
    message.credentials = (object.credentials !== undefined && object.credentials !== null)
      ? Credentials.fromPartial(object.credentials)
      : undefined;
    return message;
  },
};

function createBaseLoginFindOneInput(): LoginFindOneInput {
  return { id: "" };
}

export const LoginFindOneInput = {
  encode(message: LoginFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginFindOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: LoginFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<LoginFindOneInput>): LoginFindOneInput {
    return LoginFindOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LoginFindOneInput>): LoginFindOneInput {
    const message = createBaseLoginFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseLoginFindWhereInput(): LoginFindWhereInput {
  return { platform: "", platformLoginId: "", platformLoginSecret: "" };
}

export const LoginFindWhereInput = {
  encode(message: LoginFindWhereInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.platform !== "") {
      writer.uint32(10).string(message.platform);
    }
    if (message.platformLoginId !== "") {
      writer.uint32(18).string(message.platformLoginId);
    }
    if (message.platformLoginSecret !== "") {
      writer.uint32(26).string(message.platformLoginSecret);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginFindWhereInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginFindWhereInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.platformLoginId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.platformLoginSecret = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginFindWhereInput {
    return {
      platform: isSet(object.platform) ? String(object.platform) : "",
      platformLoginId: isSet(object.platformLoginId) ? String(object.platformLoginId) : "",
      platformLoginSecret: isSet(object.platformLoginSecret) ? String(object.platformLoginSecret) : "",
    };
  },

  toJSON(message: LoginFindWhereInput): unknown {
    const obj: any = {};
    if (message.platform !== "") {
      obj.platform = message.platform;
    }
    if (message.platformLoginId !== "") {
      obj.platformLoginId = message.platformLoginId;
    }
    if (message.platformLoginSecret !== "") {
      obj.platformLoginSecret = message.platformLoginSecret;
    }
    return obj;
  },

  create(base?: DeepPartial<LoginFindWhereInput>): LoginFindWhereInput {
    return LoginFindWhereInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LoginFindWhereInput>): LoginFindWhereInput {
    const message = createBaseLoginFindWhereInput();
    message.platform = object.platform ?? "";
    message.platformLoginId = object.platformLoginId ?? "";
    message.platformLoginSecret = object.platformLoginSecret ?? "";
    return message;
  },
};

function createBaseLoginFindByPlatformIdInput(): LoginFindByPlatformIdInput {
  return { platform: "", platformLoginId: "" };
}

export const LoginFindByPlatformIdInput = {
  encode(message: LoginFindByPlatformIdInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.platform !== "") {
      writer.uint32(10).string(message.platform);
    }
    if (message.platformLoginId !== "") {
      writer.uint32(18).string(message.platformLoginId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginFindByPlatformIdInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginFindByPlatformIdInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.platformLoginId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginFindByPlatformIdInput {
    return {
      platform: isSet(object.platform) ? String(object.platform) : "",
      platformLoginId: isSet(object.platformLoginId) ? String(object.platformLoginId) : "",
    };
  },

  toJSON(message: LoginFindByPlatformIdInput): unknown {
    const obj: any = {};
    if (message.platform !== "") {
      obj.platform = message.platform;
    }
    if (message.platformLoginId !== "") {
      obj.platformLoginId = message.platformLoginId;
    }
    return obj;
  },

  create(base?: DeepPartial<LoginFindByPlatformIdInput>): LoginFindByPlatformIdInput {
    return LoginFindByPlatformIdInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LoginFindByPlatformIdInput>): LoginFindByPlatformIdInput {
    const message = createBaseLoginFindByPlatformIdInput();
    message.platform = object.platform ?? "";
    message.platformLoginId = object.platformLoginId ?? "";
    return message;
  },
};

function createBaseLoginRemoveOneInput(): LoginRemoveOneInput {
  return { id: "" };
}

export const LoginRemoveOneInput = {
  encode(message: LoginRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: LoginRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<LoginRemoveOneInput>): LoginRemoveOneInput {
    return LoginRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LoginRemoveOneInput>): LoginRemoveOneInput {
    const message = createBaseLoginRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseUser(): User {
  return { id: "", createdAt: 0, updatedAt: 0, name: "", email: "", photo: "", onboardingFlags: undefined };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.photo !== "") {
      writer.uint32(50).string(message.photo);
    }
    if (message.onboardingFlags !== undefined) {
      UserOnboardingFlags.encode(message.onboardingFlags, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.email = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.photo = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.onboardingFlags = UserOnboardingFlags.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      email: isSet(object.email) ? String(object.email) : "",
      photo: isSet(object.photo) ? String(object.photo) : "",
      onboardingFlags: isSet(object.onboardingFlags) ? UserOnboardingFlags.fromJSON(object.onboardingFlags) : undefined,
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.photo !== "") {
      obj.photo = message.photo;
    }
    if (message.onboardingFlags !== undefined) {
      obj.onboardingFlags = UserOnboardingFlags.toJSON(message.onboardingFlags);
    }
    return obj;
  },

  create(base?: DeepPartial<User>): User {
    return User.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<User>): User {
    const message = createBaseUser();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.photo = object.photo ?? "";
    message.onboardingFlags = (object.onboardingFlags !== undefined && object.onboardingFlags !== null)
      ? UserOnboardingFlags.fromPartial(object.onboardingFlags)
      : undefined;
    return message;
  },
};

function createBaseUserOnboardingFlags(): UserOnboardingFlags {
  return { initial: false };
}

export const UserOnboardingFlags = {
  encode(message: UserOnboardingFlags, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initial === true) {
      writer.uint32(8).bool(message.initial);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserOnboardingFlags {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserOnboardingFlags();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.initial = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserOnboardingFlags {
    return { initial: isSet(object.initial) ? Boolean(object.initial) : false };
  },

  toJSON(message: UserOnboardingFlags): unknown {
    const obj: any = {};
    if (message.initial === true) {
      obj.initial = message.initial;
    }
    return obj;
  },

  create(base?: DeepPartial<UserOnboardingFlags>): UserOnboardingFlags {
    return UserOnboardingFlags.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserOnboardingFlags>): UserOnboardingFlags {
    const message = createBaseUserOnboardingFlags();
    message.initial = object.initial ?? false;
    return message;
  },
};

function createBaseUserCreateOneInput(): UserCreateOneInput {
  return { name: "", email: "", photo: "", onboardingFlags: undefined };
}

export const UserCreateOneInput = {
  encode(message: UserCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.photo !== "") {
      writer.uint32(50).string(message.photo);
    }
    if (message.onboardingFlags !== undefined) {
      UserOnboardingFlags.encode(message.onboardingFlags, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.email = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.photo = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.onboardingFlags = UserOnboardingFlags.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserCreateOneInput {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      email: isSet(object.email) ? String(object.email) : "",
      photo: isSet(object.photo) ? String(object.photo) : "",
      onboardingFlags: isSet(object.onboardingFlags) ? UserOnboardingFlags.fromJSON(object.onboardingFlags) : undefined,
    };
  },

  toJSON(message: UserCreateOneInput): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.photo !== "") {
      obj.photo = message.photo;
    }
    if (message.onboardingFlags !== undefined) {
      obj.onboardingFlags = UserOnboardingFlags.toJSON(message.onboardingFlags);
    }
    return obj;
  },

  create(base?: DeepPartial<UserCreateOneInput>): UserCreateOneInput {
    return UserCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserCreateOneInput>): UserCreateOneInput {
    const message = createBaseUserCreateOneInput();
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.photo = object.photo ?? "";
    message.onboardingFlags = (object.onboardingFlags !== undefined && object.onboardingFlags !== null)
      ? UserOnboardingFlags.fromPartial(object.onboardingFlags)
      : undefined;
    return message;
  },
};

function createBaseUserUpdateOneInput(): UserUpdateOneInput {
  return { id: "", name: "", email: "", photo: "", onboardingFlags: undefined };
}

export const UserUpdateOneInput = {
  encode(message: UserUpdateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.photo !== "") {
      writer.uint32(50).string(message.photo);
    }
    if (message.onboardingFlags !== undefined) {
      UserOnboardingFlags.encode(message.onboardingFlags, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserUpdateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserUpdateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.email = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.photo = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.onboardingFlags = UserOnboardingFlags.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserUpdateOneInput {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      email: isSet(object.email) ? String(object.email) : "",
      photo: isSet(object.photo) ? String(object.photo) : "",
      onboardingFlags: isSet(object.onboardingFlags) ? UserOnboardingFlags.fromJSON(object.onboardingFlags) : undefined,
    };
  },

  toJSON(message: UserUpdateOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.photo !== "") {
      obj.photo = message.photo;
    }
    if (message.onboardingFlags !== undefined) {
      obj.onboardingFlags = UserOnboardingFlags.toJSON(message.onboardingFlags);
    }
    return obj;
  },

  create(base?: DeepPartial<UserUpdateOneInput>): UserUpdateOneInput {
    return UserUpdateOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserUpdateOneInput>): UserUpdateOneInput {
    const message = createBaseUserUpdateOneInput();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.photo = object.photo ?? "";
    message.onboardingFlags = (object.onboardingFlags !== undefined && object.onboardingFlags !== null)
      ? UserOnboardingFlags.fromPartial(object.onboardingFlags)
      : undefined;
    return message;
  },
};

function createBaseUserFindOneInput(): UserFindOneInput {
  return { id: "" };
}

export const UserFindOneInput = {
  encode(message: UserFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: UserFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<UserFindOneInput>): UserFindOneInput {
    return UserFindOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserFindOneInput>): UserFindOneInput {
    const message = createBaseUserFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseUserRemoveOneInput(): UserRemoveOneInput {
  return { id: "" };
}

export const UserRemoveOneInput = {
  encode(message: UserRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: UserRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<UserRemoveOneInput>): UserRemoveOneInput {
    return UserRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserRemoveOneInput>): UserRemoveOneInput {
    const message = createBaseUserRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseUserSearchFilter(): UserSearchFilter {
  return { name: "" };
}

export const UserSearchFilter = {
  encode(message: UserSearchFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSearchFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSearchFilter {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: UserSearchFilter): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<UserSearchFilter>): UserSearchFilter {
    return UserSearchFilter.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserSearchFilter>): UserSearchFilter {
    const message = createBaseUserSearchFilter();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseUserSearchOpts(): UserSearchOpts {
  return { limit: 0, offset: 0, waitForSync: false };
}

export const UserSearchOpts = {
  encode(message: UserSearchOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    if (message.waitForSync === true) {
      writer.uint32(24).bool(message.waitForSync);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSearchOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.waitForSync = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSearchOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      waitForSync: isSet(object.waitForSync) ? Boolean(object.waitForSync) : false,
    };
  },

  toJSON(message: UserSearchOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    if (message.waitForSync === true) {
      obj.waitForSync = message.waitForSync;
    }
    return obj;
  },

  create(base?: DeepPartial<UserSearchOpts>): UserSearchOpts {
    return UserSearchOpts.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserSearchOpts>): UserSearchOpts {
    const message = createBaseUserSearchOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    message.waitForSync = object.waitForSync ?? false;
    return message;
  },
};

function createBaseUserSearchInput(): UserSearchInput {
  return { filter: undefined, opts: undefined };
}

export const UserSearchInput = {
  encode(message: UserSearchInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      UserSearchFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      UserSearchOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSearchInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = UserSearchFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = UserSearchOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSearchInput {
    return {
      filter: isSet(object.filter) ? UserSearchFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? UserSearchOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: UserSearchInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = UserSearchFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = UserSearchOpts.toJSON(message.opts);
    }
    return obj;
  },

  create(base?: DeepPartial<UserSearchInput>): UserSearchInput {
    return UserSearchInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserSearchInput>): UserSearchInput {
    const message = createBaseUserSearchInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? UserSearchFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? UserSearchOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseUserSearchResultMeta(): UserSearchResultMeta {
  return { offset: 0 };
}

export const UserSearchResultMeta = {
  encode(message: UserSearchResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSearchResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSearchResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: UserSearchResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create(base?: DeepPartial<UserSearchResultMeta>): UserSearchResultMeta {
    return UserSearchResultMeta.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserSearchResultMeta>): UserSearchResultMeta {
    const message = createBaseUserSearchResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseUserSearchResult(): UserSearchResult {
  return { meta: undefined, users: [] };
}

export const UserSearchResult = {
  encode(message: UserSearchResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      UserSearchResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.users) {
      User.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSearchResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = UserSearchResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSearchResult {
    return {
      meta: isSet(object.meta) ? UserSearchResultMeta.fromJSON(object.meta) : undefined,
      users: Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [],
    };
  },

  toJSON(message: UserSearchResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = UserSearchResultMeta.toJSON(message.meta);
    }
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<UserSearchResult>): UserSearchResult {
    return UserSearchResult.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserSearchResult>): UserSearchResult {
    const message = createBaseUserSearchResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? UserSearchResultMeta.fromPartial(object.meta)
      : undefined;
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

function createBaseHealthCheckResult(): HealthCheckResult {
  return { ok: false };
}

export const HealthCheckResult = {
  encode(message: HealthCheckResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ok === true) {
      writer.uint32(8).bool(message.ok);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheckResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthCheckResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.ok = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HealthCheckResult {
    return { ok: isSet(object.ok) ? Boolean(object.ok) : false };
  },

  toJSON(message: HealthCheckResult): unknown {
    const obj: any = {};
    if (message.ok === true) {
      obj.ok = message.ok;
    }
    return obj;
  },

  create(base?: DeepPartial<HealthCheckResult>): HealthCheckResult {
    return HealthCheckResult.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<HealthCheckResult>): HealthCheckResult {
    const message = createBaseHealthCheckResult();
    message.ok = object.ok ?? false;
    return message;
  },
};

function createBaseIntRange(): IntRange {
  return { min: 0, max: 0 };
}

export const IntRange = {
  encode(message: IntRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.min !== 0) {
      writer.uint32(8).uint32(message.min);
    }
    if (message.max !== 0) {
      writer.uint32(16).uint32(message.max);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IntRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.min = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.max = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IntRange {
    return { min: isSet(object.min) ? Number(object.min) : 0, max: isSet(object.max) ? Number(object.max) : 0 };
  },

  toJSON(message: IntRange): unknown {
    const obj: any = {};
    if (message.min !== 0) {
      obj.min = Math.round(message.min);
    }
    if (message.max !== 0) {
      obj.max = Math.round(message.max);
    }
    return obj;
  },

  create(base?: DeepPartial<IntRange>): IntRange {
    return IntRange.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<IntRange>): IntRange {
    const message = createBaseIntRange();
    message.min = object.min ?? 0;
    message.max = object.max ?? 0;
    return message;
  },
};

function createBaseConversation(): Conversation {
  return { id: "", createdAt: 0, updatedAt: 0, name: "", description: "", lastMessageAt: 0 };
}

export const Conversation = {
  encode(message: Conversation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.lastMessageAt !== 0) {
      writer.uint32(48).uint64(message.lastMessageAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Conversation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.lastMessageAt = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Conversation {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      lastMessageAt: isSet(object.lastMessageAt) ? Number(object.lastMessageAt) : 0,
    };
  },

  toJSON(message: Conversation): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.lastMessageAt !== 0) {
      obj.lastMessageAt = Math.round(message.lastMessageAt);
    }
    return obj;
  },

  create(base?: DeepPartial<Conversation>): Conversation {
    return Conversation.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Conversation>): Conversation {
    const message = createBaseConversation();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.lastMessageAt = object.lastMessageAt ?? 0;
    return message;
  },
};

function createBaseConversationCreateOneInput(): ConversationCreateOneInput {
  return { name: "", description: "" };
}

export const ConversationCreateOneInput = {
  encode(message: ConversationCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationCreateOneInput {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: ConversationCreateOneInput): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create(base?: DeepPartial<ConversationCreateOneInput>): ConversationCreateOneInput {
    return ConversationCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConversationCreateOneInput>): ConversationCreateOneInput {
    const message = createBaseConversationCreateOneInput();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseConversationUpdateOneInput(): ConversationUpdateOneInput {
  return { id: "", name: "", description: "", lastMessageAt: 0 };
}

export const ConversationUpdateOneInput = {
  encode(message: ConversationUpdateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.lastMessageAt !== 0) {
      writer.uint32(48).uint64(message.lastMessageAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationUpdateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationUpdateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.lastMessageAt = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationUpdateOneInput {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      lastMessageAt: isSet(object.lastMessageAt) ? Number(object.lastMessageAt) : 0,
    };
  },

  toJSON(message: ConversationUpdateOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.lastMessageAt !== 0) {
      obj.lastMessageAt = Math.round(message.lastMessageAt);
    }
    return obj;
  },

  create(base?: DeepPartial<ConversationUpdateOneInput>): ConversationUpdateOneInput {
    return ConversationUpdateOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConversationUpdateOneInput>): ConversationUpdateOneInput {
    const message = createBaseConversationUpdateOneInput();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.lastMessageAt = object.lastMessageAt ?? 0;
    return message;
  },
};

function createBaseConversationFindOneInput(): ConversationFindOneInput {
  return { id: "" };
}

export const ConversationFindOneInput = {
  encode(message: ConversationFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationFindOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: ConversationFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<ConversationFindOneInput>): ConversationFindOneInput {
    return ConversationFindOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConversationFindOneInput>): ConversationFindOneInput {
    const message = createBaseConversationFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseConversationRemoveOneInput(): ConversationRemoveOneInput {
  return { id: "" };
}

export const ConversationRemoveOneInput = {
  encode(message: ConversationRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: ConversationRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<ConversationRemoveOneInput>): ConversationRemoveOneInput {
    return ConversationRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConversationRemoveOneInput>): ConversationRemoveOneInput {
    const message = createBaseConversationRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseConversationFindByParticipantFilter(): ConversationFindByParticipantFilter {
  return { participantId: "", fromLastMessageAt: 0 };
}

export const ConversationFindByParticipantFilter = {
  encode(message: ConversationFindByParticipantFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.participantId !== "") {
      writer.uint32(10).string(message.participantId);
    }
    if (message.fromLastMessageAt !== 0) {
      writer.uint32(16).uint64(message.fromLastMessageAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindByParticipantFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationFindByParticipantFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.participantId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.fromLastMessageAt = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationFindByParticipantFilter {
    return {
      participantId: isSet(object.participantId) ? String(object.participantId) : "",
      fromLastMessageAt: isSet(object.fromLastMessageAt) ? Number(object.fromLastMessageAt) : 0,
    };
  },

  toJSON(message: ConversationFindByParticipantFilter): unknown {
    const obj: any = {};
    if (message.participantId !== "") {
      obj.participantId = message.participantId;
    }
    if (message.fromLastMessageAt !== 0) {
      obj.fromLastMessageAt = Math.round(message.fromLastMessageAt);
    }
    return obj;
  },

  create(base?: DeepPartial<ConversationFindByParticipantFilter>): ConversationFindByParticipantFilter {
    return ConversationFindByParticipantFilter.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConversationFindByParticipantFilter>): ConversationFindByParticipantFilter {
    const message = createBaseConversationFindByParticipantFilter();
    message.participantId = object.participantId ?? "";
    message.fromLastMessageAt = object.fromLastMessageAt ?? 0;
    return message;
  },
};

function createBaseConversationFindByParticipantOpts(): ConversationFindByParticipantOpts {
  return { limit: 0, offset: 0 };
}

export const ConversationFindByParticipantOpts = {
  encode(message: ConversationFindByParticipantOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindByParticipantOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationFindByParticipantOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationFindByParticipantOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: ConversationFindByParticipantOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create(base?: DeepPartial<ConversationFindByParticipantOpts>): ConversationFindByParticipantOpts {
    return ConversationFindByParticipantOpts.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConversationFindByParticipantOpts>): ConversationFindByParticipantOpts {
    const message = createBaseConversationFindByParticipantOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseConversationFindByParticipantInput(): ConversationFindByParticipantInput {
  return { filter: undefined, opts: undefined };
}

export const ConversationFindByParticipantInput = {
  encode(message: ConversationFindByParticipantInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      ConversationFindByParticipantFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      ConversationFindByParticipantOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindByParticipantInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationFindByParticipantInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = ConversationFindByParticipantFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = ConversationFindByParticipantOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationFindByParticipantInput {
    return {
      filter: isSet(object.filter) ? ConversationFindByParticipantFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? ConversationFindByParticipantOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: ConversationFindByParticipantInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = ConversationFindByParticipantFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = ConversationFindByParticipantOpts.toJSON(message.opts);
    }
    return obj;
  },

  create(base?: DeepPartial<ConversationFindByParticipantInput>): ConversationFindByParticipantInput {
    return ConversationFindByParticipantInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConversationFindByParticipantInput>): ConversationFindByParticipantInput {
    const message = createBaseConversationFindByParticipantInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? ConversationFindByParticipantFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? ConversationFindByParticipantOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseConversationFindByParticipantResultMeta(): ConversationFindByParticipantResultMeta {
  return { offset: 0 };
}

export const ConversationFindByParticipantResultMeta = {
  encode(message: ConversationFindByParticipantResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindByParticipantResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationFindByParticipantResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationFindByParticipantResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: ConversationFindByParticipantResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create(base?: DeepPartial<ConversationFindByParticipantResultMeta>): ConversationFindByParticipantResultMeta {
    return ConversationFindByParticipantResultMeta.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConversationFindByParticipantResultMeta>): ConversationFindByParticipantResultMeta {
    const message = createBaseConversationFindByParticipantResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseConversationFindByParticipantResult(): ConversationFindByParticipantResult {
  return { meta: undefined, results: [] };
}

export const ConversationFindByParticipantResult = {
  encode(message: ConversationFindByParticipantResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      ConversationFindByParticipantResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Conversation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindByParticipantResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationFindByParticipantResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = ConversationFindByParticipantResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(Conversation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationFindByParticipantResult {
    return {
      meta: isSet(object.meta) ? ConversationFindByParticipantResultMeta.fromJSON(object.meta) : undefined,
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Conversation.fromJSON(e)) : [],
    };
  },

  toJSON(message: ConversationFindByParticipantResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = ConversationFindByParticipantResultMeta.toJSON(message.meta);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => Conversation.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ConversationFindByParticipantResult>): ConversationFindByParticipantResult {
    return ConversationFindByParticipantResult.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConversationFindByParticipantResult>): ConversationFindByParticipantResult {
    const message = createBaseConversationFindByParticipantResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? ConversationFindByParticipantResultMeta.fromPartial(object.meta)
      : undefined;
    message.results = object.results?.map((e) => Conversation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseConversationParticipant(): ConversationParticipant {
  return { id: "", createdAt: 0, updatedAt: 0, conversationId: "", participantId: "", writeableAs: undefined };
}

export const ConversationParticipant = {
  encode(message: ConversationParticipant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.conversationId !== "") {
      writer.uint32(34).string(message.conversationId);
    }
    if (message.participantId !== "") {
      writer.uint32(42).string(message.participantId);
    }
    if (message.writeableAs !== undefined) {
      AuthorizableAs.encode(message.writeableAs, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipant {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationParticipant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.conversationId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.participantId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.writeableAs = AuthorizableAs.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationParticipant {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      conversationId: isSet(object.conversationId) ? String(object.conversationId) : "",
      participantId: isSet(object.participantId) ? String(object.participantId) : "",
      writeableAs: isSet(object.writeableAs) ? AuthorizableAs.fromJSON(object.writeableAs) : undefined,
    };
  },

  toJSON(message: ConversationParticipant): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.conversationId !== "") {
      obj.conversationId = message.conversationId;
    }
    if (message.participantId !== "") {
      obj.participantId = message.participantId;
    }
    if (message.writeableAs !== undefined) {
      obj.writeableAs = AuthorizableAs.toJSON(message.writeableAs);
    }
    return obj;
  },

  create(base?: DeepPartial<ConversationParticipant>): ConversationParticipant {
    return ConversationParticipant.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConversationParticipant>): ConversationParticipant {
    const message = createBaseConversationParticipant();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.conversationId = object.conversationId ?? "";
    message.participantId = object.participantId ?? "";
    message.writeableAs = (object.writeableAs !== undefined && object.writeableAs !== null)
      ? AuthorizableAs.fromPartial(object.writeableAs)
      : undefined;
    return message;
  },
};

function createBaseConversationParticipantCreateOneInput(): ConversationParticipantCreateOneInput {
  return { conversationId: "", participantId: "" };
}

export const ConversationParticipantCreateOneInput = {
  encode(message: ConversationParticipantCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.conversationId !== "") {
      writer.uint32(34).string(message.conversationId);
    }
    if (message.participantId !== "") {
      writer.uint32(42).string(message.participantId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationParticipantCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.conversationId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.participantId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationParticipantCreateOneInput {
    return {
      conversationId: isSet(object.conversationId) ? String(object.conversationId) : "",
      participantId: isSet(object.participantId) ? String(object.participantId) : "",
    };
  },

  toJSON(message: ConversationParticipantCreateOneInput): unknown {
    const obj: any = {};
    if (message.conversationId !== "") {
      obj.conversationId = message.conversationId;
    }
    if (message.participantId !== "") {
      obj.participantId = message.participantId;
    }
    return obj;
  },

  create(base?: DeepPartial<ConversationParticipantCreateOneInput>): ConversationParticipantCreateOneInput {
    return ConversationParticipantCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConversationParticipantCreateOneInput>): ConversationParticipantCreateOneInput {
    const message = createBaseConversationParticipantCreateOneInput();
    message.conversationId = object.conversationId ?? "";
    message.participantId = object.participantId ?? "";
    return message;
  },
};

function createBaseConversationParticipantFindOneInput(): ConversationParticipantFindOneInput {
  return { id: "" };
}

export const ConversationParticipantFindOneInput = {
  encode(message: ConversationParticipantFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationParticipantFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationParticipantFindOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: ConversationParticipantFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<ConversationParticipantFindOneInput>): ConversationParticipantFindOneInput {
    return ConversationParticipantFindOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConversationParticipantFindOneInput>): ConversationParticipantFindOneInput {
    const message = createBaseConversationParticipantFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseConversationParticipantRemoveOneInput(): ConversationParticipantRemoveOneInput {
  return { id: "" };
}

export const ConversationParticipantRemoveOneInput = {
  encode(message: ConversationParticipantRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationParticipantRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationParticipantRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: ConversationParticipantRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<ConversationParticipantRemoveOneInput>): ConversationParticipantRemoveOneInput {
    return ConversationParticipantRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConversationParticipantRemoveOneInput>): ConversationParticipantRemoveOneInput {
    const message = createBaseConversationParticipantRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseConversationParticipantFindByConversationFilter(): ConversationParticipantFindByConversationFilter {
  return { conversationId: "" };
}

export const ConversationParticipantFindByConversationFilter = {
  encode(
    message: ConversationParticipantFindByConversationFilter,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.conversationId !== "") {
      writer.uint32(10).string(message.conversationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantFindByConversationFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationParticipantFindByConversationFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.conversationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationParticipantFindByConversationFilter {
    return { conversationId: isSet(object.conversationId) ? String(object.conversationId) : "" };
  },

  toJSON(message: ConversationParticipantFindByConversationFilter): unknown {
    const obj: any = {};
    if (message.conversationId !== "") {
      obj.conversationId = message.conversationId;
    }
    return obj;
  },

  create(
    base?: DeepPartial<ConversationParticipantFindByConversationFilter>,
  ): ConversationParticipantFindByConversationFilter {
    return ConversationParticipantFindByConversationFilter.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<ConversationParticipantFindByConversationFilter>,
  ): ConversationParticipantFindByConversationFilter {
    const message = createBaseConversationParticipantFindByConversationFilter();
    message.conversationId = object.conversationId ?? "";
    return message;
  },
};

function createBaseConversationParticipantFindByConversationOpts(): ConversationParticipantFindByConversationOpts {
  return { limit: 0, offset: 0 };
}

export const ConversationParticipantFindByConversationOpts = {
  encode(message: ConversationParticipantFindByConversationOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantFindByConversationOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationParticipantFindByConversationOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationParticipantFindByConversationOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: ConversationParticipantFindByConversationOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create(
    base?: DeepPartial<ConversationParticipantFindByConversationOpts>,
  ): ConversationParticipantFindByConversationOpts {
    return ConversationParticipantFindByConversationOpts.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<ConversationParticipantFindByConversationOpts>,
  ): ConversationParticipantFindByConversationOpts {
    const message = createBaseConversationParticipantFindByConversationOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseConversationParticipantFindByConversationInput(): ConversationParticipantFindByConversationInput {
  return { filter: undefined, opts: undefined };
}

export const ConversationParticipantFindByConversationInput = {
  encode(
    message: ConversationParticipantFindByConversationInput,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.filter !== undefined) {
      ConversationParticipantFindByConversationFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      ConversationParticipantFindByConversationOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantFindByConversationInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationParticipantFindByConversationInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = ConversationParticipantFindByConversationFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = ConversationParticipantFindByConversationOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationParticipantFindByConversationInput {
    return {
      filter: isSet(object.filter)
        ? ConversationParticipantFindByConversationFilter.fromJSON(object.filter)
        : undefined,
      opts: isSet(object.opts) ? ConversationParticipantFindByConversationOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: ConversationParticipantFindByConversationInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = ConversationParticipantFindByConversationFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = ConversationParticipantFindByConversationOpts.toJSON(message.opts);
    }
    return obj;
  },

  create(
    base?: DeepPartial<ConversationParticipantFindByConversationInput>,
  ): ConversationParticipantFindByConversationInput {
    return ConversationParticipantFindByConversationInput.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<ConversationParticipantFindByConversationInput>,
  ): ConversationParticipantFindByConversationInput {
    const message = createBaseConversationParticipantFindByConversationInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? ConversationParticipantFindByConversationFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? ConversationParticipantFindByConversationOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseConversationParticipantFindByConversationResultMeta(): ConversationParticipantFindByConversationResultMeta {
  return { offset: 0 };
}

export const ConversationParticipantFindByConversationResultMeta = {
  encode(
    message: ConversationParticipantFindByConversationResultMeta,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantFindByConversationResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationParticipantFindByConversationResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationParticipantFindByConversationResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: ConversationParticipantFindByConversationResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create(
    base?: DeepPartial<ConversationParticipantFindByConversationResultMeta>,
  ): ConversationParticipantFindByConversationResultMeta {
    return ConversationParticipantFindByConversationResultMeta.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<ConversationParticipantFindByConversationResultMeta>,
  ): ConversationParticipantFindByConversationResultMeta {
    const message = createBaseConversationParticipantFindByConversationResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseConversationParticipantFindByConversationResult(): ConversationParticipantFindByConversationResult {
  return { meta: undefined, results: [] };
}

export const ConversationParticipantFindByConversationResult = {
  encode(
    message: ConversationParticipantFindByConversationResult,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.meta !== undefined) {
      ConversationParticipantFindByConversationResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      ConversationParticipant.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantFindByConversationResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationParticipantFindByConversationResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = ConversationParticipantFindByConversationResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(ConversationParticipant.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationParticipantFindByConversationResult {
    return {
      meta: isSet(object.meta) ? ConversationParticipantFindByConversationResultMeta.fromJSON(object.meta) : undefined,
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) => ConversationParticipant.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ConversationParticipantFindByConversationResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = ConversationParticipantFindByConversationResultMeta.toJSON(message.meta);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => ConversationParticipant.toJSON(e));
    }
    return obj;
  },

  create(
    base?: DeepPartial<ConversationParticipantFindByConversationResult>,
  ): ConversationParticipantFindByConversationResult {
    return ConversationParticipantFindByConversationResult.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<ConversationParticipantFindByConversationResult>,
  ): ConversationParticipantFindByConversationResult {
    const message = createBaseConversationParticipantFindByConversationResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? ConversationParticipantFindByConversationResultMeta.fromPartial(object.meta)
      : undefined;
    message.results = object.results?.map((e) => ConversationParticipant.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMessage(): Message {
  return {
    id: "",
    createdAt: 0,
    updatedAt: 0,
    conversationId: "",
    media: undefined,
    senderId: "",
    sentToIds: [],
    receivedByIds: [],
    seenByIds: [],
    deleted: false,
    uniqueness: "",
  };
}

export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.conversationId !== "") {
      writer.uint32(34).string(message.conversationId);
    }
    if (message.media !== undefined) {
      MessageMedia.encode(message.media, writer.uint32(42).fork()).ldelim();
    }
    if (message.senderId !== "") {
      writer.uint32(50).string(message.senderId);
    }
    for (const v of message.sentToIds) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.receivedByIds) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.seenByIds) {
      writer.uint32(74).string(v!);
    }
    if (message.deleted === true) {
      writer.uint32(80).bool(message.deleted);
    }
    if (message.uniqueness !== "") {
      writer.uint32(90).string(message.uniqueness);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.conversationId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.media = MessageMedia.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.senderId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.sentToIds.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.receivedByIds.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.seenByIds.push(reader.string());
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.deleted = reader.bool();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.uniqueness = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      conversationId: isSet(object.conversationId) ? String(object.conversationId) : "",
      media: isSet(object.media) ? MessageMedia.fromJSON(object.media) : undefined,
      senderId: isSet(object.senderId) ? String(object.senderId) : "",
      sentToIds: Array.isArray(object?.sentToIds) ? object.sentToIds.map((e: any) => String(e)) : [],
      receivedByIds: Array.isArray(object?.receivedByIds) ? object.receivedByIds.map((e: any) => String(e)) : [],
      seenByIds: Array.isArray(object?.seenByIds) ? object.seenByIds.map((e: any) => String(e)) : [],
      deleted: isSet(object.deleted) ? Boolean(object.deleted) : false,
      uniqueness: isSet(object.uniqueness) ? String(object.uniqueness) : "",
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.conversationId !== "") {
      obj.conversationId = message.conversationId;
    }
    if (message.media !== undefined) {
      obj.media = MessageMedia.toJSON(message.media);
    }
    if (message.senderId !== "") {
      obj.senderId = message.senderId;
    }
    if (message.sentToIds?.length) {
      obj.sentToIds = message.sentToIds;
    }
    if (message.receivedByIds?.length) {
      obj.receivedByIds = message.receivedByIds;
    }
    if (message.seenByIds?.length) {
      obj.seenByIds = message.seenByIds;
    }
    if (message.deleted === true) {
      obj.deleted = message.deleted;
    }
    if (message.uniqueness !== "") {
      obj.uniqueness = message.uniqueness;
    }
    return obj;
  },

  create(base?: DeepPartial<Message>): Message {
    return Message.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Message>): Message {
    const message = createBaseMessage();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.conversationId = object.conversationId ?? "";
    message.media = (object.media !== undefined && object.media !== null)
      ? MessageMedia.fromPartial(object.media)
      : undefined;
    message.senderId = object.senderId ?? "";
    message.sentToIds = object.sentToIds?.map((e) => e) || [];
    message.receivedByIds = object.receivedByIds?.map((e) => e) || [];
    message.seenByIds = object.seenByIds?.map((e) => e) || [];
    message.deleted = object.deleted ?? false;
    message.uniqueness = object.uniqueness ?? "";
    return message;
  },
};

function createBaseMessageMedia(): MessageMedia {
  return { text: "" };
}

export const MessageMedia = {
  encode(message: MessageMedia, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageMedia {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageMedia();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageMedia {
    return { text: isSet(object.text) ? String(object.text) : "" };
  },

  toJSON(message: MessageMedia): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create(base?: DeepPartial<MessageMedia>): MessageMedia {
    return MessageMedia.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MessageMedia>): MessageMedia {
    const message = createBaseMessageMedia();
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseMessageCreateOneInput(): MessageCreateOneInput {
  return { conversationId: "", media: undefined, senderId: "", uniqueness: "" };
}

export const MessageCreateOneInput = {
  encode(message: MessageCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.conversationId !== "") {
      writer.uint32(34).string(message.conversationId);
    }
    if (message.media !== undefined) {
      MessageMedia.encode(message.media, writer.uint32(42).fork()).ldelim();
    }
    if (message.senderId !== "") {
      writer.uint32(50).string(message.senderId);
    }
    if (message.uniqueness !== "") {
      writer.uint32(90).string(message.uniqueness);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.conversationId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.media = MessageMedia.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.senderId = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.uniqueness = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageCreateOneInput {
    return {
      conversationId: isSet(object.conversationId) ? String(object.conversationId) : "",
      media: isSet(object.media) ? MessageMedia.fromJSON(object.media) : undefined,
      senderId: isSet(object.senderId) ? String(object.senderId) : "",
      uniqueness: isSet(object.uniqueness) ? String(object.uniqueness) : "",
    };
  },

  toJSON(message: MessageCreateOneInput): unknown {
    const obj: any = {};
    if (message.conversationId !== "") {
      obj.conversationId = message.conversationId;
    }
    if (message.media !== undefined) {
      obj.media = MessageMedia.toJSON(message.media);
    }
    if (message.senderId !== "") {
      obj.senderId = message.senderId;
    }
    if (message.uniqueness !== "") {
      obj.uniqueness = message.uniqueness;
    }
    return obj;
  },

  create(base?: DeepPartial<MessageCreateOneInput>): MessageCreateOneInput {
    return MessageCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MessageCreateOneInput>): MessageCreateOneInput {
    const message = createBaseMessageCreateOneInput();
    message.conversationId = object.conversationId ?? "";
    message.media = (object.media !== undefined && object.media !== null)
      ? MessageMedia.fromPartial(object.media)
      : undefined;
    message.senderId = object.senderId ?? "";
    message.uniqueness = object.uniqueness ?? "";
    return message;
  },
};

function createBaseMessageUpdateOneInput(): MessageUpdateOneInput {
  return { id: "", media: undefined };
}

export const MessageUpdateOneInput = {
  encode(message: MessageUpdateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.media !== undefined) {
      MessageMedia.encode(message.media, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageUpdateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageUpdateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.media = MessageMedia.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageUpdateOneInput {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      media: isSet(object.media) ? MessageMedia.fromJSON(object.media) : undefined,
    };
  },

  toJSON(message: MessageUpdateOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.media !== undefined) {
      obj.media = MessageMedia.toJSON(message.media);
    }
    return obj;
  },

  create(base?: DeepPartial<MessageUpdateOneInput>): MessageUpdateOneInput {
    return MessageUpdateOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MessageUpdateOneInput>): MessageUpdateOneInput {
    const message = createBaseMessageUpdateOneInput();
    message.id = object.id ?? "";
    message.media = (object.media !== undefined && object.media !== null)
      ? MessageMedia.fromPartial(object.media)
      : undefined;
    return message;
  },
};

function createBaseMessageFindOneInput(): MessageFindOneInput {
  return { id: "" };
}

export const MessageFindOneInput = {
  encode(message: MessageFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageFindOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: MessageFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<MessageFindOneInput>): MessageFindOneInput {
    return MessageFindOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MessageFindOneInput>): MessageFindOneInput {
    const message = createBaseMessageFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMessageFindUniqueInput(): MessageFindUniqueInput {
  return { uniqueness: "" };
}

export const MessageFindUniqueInput = {
  encode(message: MessageFindUniqueInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uniqueness !== "") {
      writer.uint32(10).string(message.uniqueness);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindUniqueInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageFindUniqueInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uniqueness = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageFindUniqueInput {
    return { uniqueness: isSet(object.uniqueness) ? String(object.uniqueness) : "" };
  },

  toJSON(message: MessageFindUniqueInput): unknown {
    const obj: any = {};
    if (message.uniqueness !== "") {
      obj.uniqueness = message.uniqueness;
    }
    return obj;
  },

  create(base?: DeepPartial<MessageFindUniqueInput>): MessageFindUniqueInput {
    return MessageFindUniqueInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MessageFindUniqueInput>): MessageFindUniqueInput {
    const message = createBaseMessageFindUniqueInput();
    message.uniqueness = object.uniqueness ?? "";
    return message;
  },
};

function createBaseMessageRemoveOneInput(): MessageRemoveOneInput {
  return { id: "" };
}

export const MessageRemoveOneInput = {
  encode(message: MessageRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: MessageRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<MessageRemoveOneInput>): MessageRemoveOneInput {
    return MessageRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MessageRemoveOneInput>): MessageRemoveOneInput {
    const message = createBaseMessageRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMessageFindByConversationFilter(): MessageFindByConversationFilter {
  return { conversationId: "" };
}

export const MessageFindByConversationFilter = {
  encode(message: MessageFindByConversationFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.conversationId !== "") {
      writer.uint32(10).string(message.conversationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindByConversationFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageFindByConversationFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.conversationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageFindByConversationFilter {
    return { conversationId: isSet(object.conversationId) ? String(object.conversationId) : "" };
  },

  toJSON(message: MessageFindByConversationFilter): unknown {
    const obj: any = {};
    if (message.conversationId !== "") {
      obj.conversationId = message.conversationId;
    }
    return obj;
  },

  create(base?: DeepPartial<MessageFindByConversationFilter>): MessageFindByConversationFilter {
    return MessageFindByConversationFilter.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MessageFindByConversationFilter>): MessageFindByConversationFilter {
    const message = createBaseMessageFindByConversationFilter();
    message.conversationId = object.conversationId ?? "";
    return message;
  },
};

function createBaseMessageFindByConversationOpts(): MessageFindByConversationOpts {
  return { limit: 0, offset: 0 };
}

export const MessageFindByConversationOpts = {
  encode(message: MessageFindByConversationOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindByConversationOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageFindByConversationOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageFindByConversationOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: MessageFindByConversationOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create(base?: DeepPartial<MessageFindByConversationOpts>): MessageFindByConversationOpts {
    return MessageFindByConversationOpts.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MessageFindByConversationOpts>): MessageFindByConversationOpts {
    const message = createBaseMessageFindByConversationOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseMessageFindByConversationInput(): MessageFindByConversationInput {
  return { filter: undefined, opts: undefined };
}

export const MessageFindByConversationInput = {
  encode(message: MessageFindByConversationInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      MessageFindByConversationFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      MessageFindByConversationOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindByConversationInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageFindByConversationInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = MessageFindByConversationFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = MessageFindByConversationOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageFindByConversationInput {
    return {
      filter: isSet(object.filter) ? MessageFindByConversationFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? MessageFindByConversationOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: MessageFindByConversationInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = MessageFindByConversationFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = MessageFindByConversationOpts.toJSON(message.opts);
    }
    return obj;
  },

  create(base?: DeepPartial<MessageFindByConversationInput>): MessageFindByConversationInput {
    return MessageFindByConversationInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MessageFindByConversationInput>): MessageFindByConversationInput {
    const message = createBaseMessageFindByConversationInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? MessageFindByConversationFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? MessageFindByConversationOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseMessageFindByConversationResultMeta(): MessageFindByConversationResultMeta {
  return { offset: 0 };
}

export const MessageFindByConversationResultMeta = {
  encode(message: MessageFindByConversationResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindByConversationResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageFindByConversationResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageFindByConversationResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: MessageFindByConversationResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create(base?: DeepPartial<MessageFindByConversationResultMeta>): MessageFindByConversationResultMeta {
    return MessageFindByConversationResultMeta.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MessageFindByConversationResultMeta>): MessageFindByConversationResultMeta {
    const message = createBaseMessageFindByConversationResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseMessageFindByConversationResult(): MessageFindByConversationResult {
  return { meta: undefined, results: [] };
}

export const MessageFindByConversationResult = {
  encode(message: MessageFindByConversationResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      MessageFindByConversationResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Message.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindByConversationResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageFindByConversationResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = MessageFindByConversationResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(Message.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageFindByConversationResult {
    return {
      meta: isSet(object.meta) ? MessageFindByConversationResultMeta.fromJSON(object.meta) : undefined,
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Message.fromJSON(e)) : [],
    };
  },

  toJSON(message: MessageFindByConversationResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = MessageFindByConversationResultMeta.toJSON(message.meta);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => Message.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MessageFindByConversationResult>): MessageFindByConversationResult {
    return MessageFindByConversationResult.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MessageFindByConversationResult>): MessageFindByConversationResult {
    const message = createBaseMessageFindByConversationResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? MessageFindByConversationResultMeta.fromPartial(object.meta)
      : undefined;
    message.results = object.results?.map((e) => Message.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMessageJobPayload(): MessageJobPayload {
  return { id: "" };
}

export const MessageJobPayload = {
  encode(message: MessageJobPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageJobPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageJobPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageJobPayload {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: MessageJobPayload): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<MessageJobPayload>): MessageJobPayload {
    return MessageJobPayload.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MessageJobPayload>): MessageJobPayload {
    const message = createBaseMessageJobPayload();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePermission(): Permission {
  return {
    id: "",
    createdAt: 0,
    updatedAt: 0,
    entity: "",
    entityId: "",
    permittedEntity: "",
    permittedEntityId: "",
    action: "",
  };
}

export const Permission = {
  encode(message: Permission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.entity !== "") {
      writer.uint32(34).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(42).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(50).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(58).string(message.permittedEntityId);
    }
    if (message.action !== "") {
      writer.uint32(66).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Permission {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Permission {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: Permission): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create(base?: DeepPartial<Permission>): Permission {
    return Permission.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Permission>): Permission {
    const message = createBasePermission();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBaseAuthorizableAs(): AuthorizableAs {
  return { entity: "", entityId: "" };
}

export const AuthorizableAs = {
  encode(message: AuthorizableAs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizableAs {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthorizableAs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthorizableAs {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
    };
  },

  toJSON(message: AuthorizableAs): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    return obj;
  },

  create(base?: DeepPartial<AuthorizableAs>): AuthorizableAs {
    return AuthorizableAs.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AuthorizableAs>): AuthorizableAs {
    const message = createBaseAuthorizableAs();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    return message;
  },
};

function createBasePermissions(): Permissions {
  return { permissions: [] };
}

export const Permissions = {
  encode(message: Permissions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.permissions) {
      Permission.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Permissions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.permissions.push(Permission.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Permissions {
    return {
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => Permission.fromJSON(e)) : [],
    };
  },

  toJSON(message: Permissions): unknown {
    const obj: any = {};
    if (message.permissions?.length) {
      obj.permissions = message.permissions.map((e) => Permission.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Permissions>): Permissions {
    return Permissions.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Permissions>): Permissions {
    const message = createBasePermissions();
    message.permissions = object.permissions?.map((e) => Permission.fromPartial(e)) || [];
    return message;
  },
};

function createBasePermissionCreateOneInput(): PermissionCreateOneInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "", action: "" };
}

export const PermissionCreateOneInput = {
  encode(message: PermissionCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(34).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(42).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(50).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(58).string(message.permittedEntityId);
    }
    if (message.action !== "") {
      writer.uint32(66).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionCreateOneInput {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: PermissionCreateOneInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionCreateOneInput>): PermissionCreateOneInput {
    return PermissionCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionCreateOneInput>): PermissionCreateOneInput {
    const message = createBasePermissionCreateOneInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionCreateManyInput(): PermissionCreateManyInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityIds: [], action: "" };
}

export const PermissionCreateManyInput = {
  encode(message: PermissionCreateManyInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(34).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(42).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(50).string(message.permittedEntity);
    }
    for (const v of message.permittedEntityIds) {
      writer.uint32(58).string(v!);
    }
    if (message.action !== "") {
      writer.uint32(66).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionCreateManyInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionCreateManyInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.permittedEntityIds.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionCreateManyInput {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityIds: Array.isArray(object?.permittedEntityIds)
        ? object.permittedEntityIds.map((e: any) => String(e))
        : [],
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: PermissionCreateManyInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityIds?.length) {
      obj.permittedEntityIds = message.permittedEntityIds;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionCreateManyInput>): PermissionCreateManyInput {
    return PermissionCreateManyInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionCreateManyInput>): PermissionCreateManyInput {
    const message = createBasePermissionCreateManyInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityIds = object.permittedEntityIds?.map((e) => e) || [];
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionFindOneInput(): PermissionFindOneInput {
  return { id: "" };
}

export const PermissionFindOneInput = {
  encode(message: PermissionFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: PermissionFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionFindOneInput>): PermissionFindOneInput {
    return PermissionFindOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionFindOneInput>): PermissionFindOneInput {
    const message = createBasePermissionFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePermissionFindWhereInput(): PermissionFindWhereInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "", action: "" };
}

export const PermissionFindWhereInput = {
  encode(message: PermissionFindWhereInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(34).string(message.permittedEntityId);
    }
    if (message.action !== "") {
      writer.uint32(42).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindWhereInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindWhereInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindWhereInput {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: PermissionFindWhereInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionFindWhereInput>): PermissionFindWhereInput {
    return PermissionFindWhereInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionFindWhereInput>): PermissionFindWhereInput {
    const message = createBasePermissionFindWhereInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionFindWhereManyInput(): PermissionFindWhereManyInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityIds: [], action: "" };
}

export const PermissionFindWhereManyInput = {
  encode(message: PermissionFindWhereManyInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    for (const v of message.permittedEntityIds) {
      writer.uint32(34).string(v!);
    }
    if (message.action !== "") {
      writer.uint32(42).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindWhereManyInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindWhereManyInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityIds.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindWhereManyInput {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityIds: Array.isArray(object?.permittedEntityIds)
        ? object.permittedEntityIds.map((e: any) => String(e))
        : [],
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: PermissionFindWhereManyInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityIds?.length) {
      obj.permittedEntityIds = message.permittedEntityIds;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionFindWhereManyInput>): PermissionFindWhereManyInput {
    return PermissionFindWhereManyInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionFindWhereManyInput>): PermissionFindWhereManyInput {
    const message = createBasePermissionFindWhereManyInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityIds = object.permittedEntityIds?.map((e) => e) || [];
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionFindWhereOrStarInput(): PermissionFindWhereOrStarInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "", action: "" };
}

export const PermissionFindWhereOrStarInput = {
  encode(message: PermissionFindWhereOrStarInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(34).string(message.permittedEntityId);
    }
    if (message.action !== "") {
      writer.uint32(42).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindWhereOrStarInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindWhereOrStarInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindWhereOrStarInput {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: PermissionFindWhereOrStarInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionFindWhereOrStarInput>): PermissionFindWhereOrStarInput {
    return PermissionFindWhereOrStarInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionFindWhereOrStarInput>): PermissionFindWhereOrStarInput {
    const message = createBasePermissionFindWhereOrStarInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermitted(): Permitted {
  return { permittedEntity: "", permittedEntityId: "" };
}

export const Permitted = {
  encode(message: Permitted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permittedEntity !== "") {
      writer.uint32(10).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(18).string(message.permittedEntityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Permitted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermitted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Permitted {
    return {
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
    };
  },

  toJSON(message: Permitted): unknown {
    const obj: any = {};
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    return obj;
  },

  create(base?: DeepPartial<Permitted>): Permitted {
    return Permitted.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Permitted>): Permitted {
    const message = createBasePermitted();
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    return message;
  },
};

function createBasePermissionValidateOneInput(): PermissionValidateOneInput {
  return { entity: "", entityId: "", action: "", permitted: [] };
}

export const PermissionValidateOneInput = {
  encode(message: PermissionValidateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.action !== "") {
      writer.uint32(26).string(message.action);
    }
    for (const v of message.permitted) {
      Permitted.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionValidateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionValidateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.action = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permitted.push(Permitted.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionValidateOneInput {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      action: isSet(object.action) ? String(object.action) : "",
      permitted: Array.isArray(object?.permitted) ? object.permitted.map((e: any) => Permitted.fromJSON(e)) : [],
    };
  },

  toJSON(message: PermissionValidateOneInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    if (message.permitted?.length) {
      obj.permitted = message.permitted.map((e) => Permitted.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionValidateOneInput>): PermissionValidateOneInput {
    return PermissionValidateOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionValidateOneInput>): PermissionValidateOneInput {
    const message = createBasePermissionValidateOneInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.action = object.action ?? "";
    message.permitted = object.permitted?.map((e) => Permitted.fromPartial(e)) || [];
    return message;
  },
};

function createBasePermissionValidateOneResult(): PermissionValidateOneResult {
  return { validated: false };
}

export const PermissionValidateOneResult = {
  encode(message: PermissionValidateOneResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validated === true) {
      writer.uint32(8).bool(message.validated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionValidateOneResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionValidateOneResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.validated = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionValidateOneResult {
    return { validated: isSet(object.validated) ? Boolean(object.validated) : false };
  },

  toJSON(message: PermissionValidateOneResult): unknown {
    const obj: any = {};
    if (message.validated === true) {
      obj.validated = message.validated;
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionValidateOneResult>): PermissionValidateOneResult {
    return PermissionValidateOneResult.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionValidateOneResult>): PermissionValidateOneResult {
    const message = createBasePermissionValidateOneResult();
    message.validated = object.validated ?? false;
    return message;
  },
};

function createBasePermissionRemoveOneInput(): PermissionRemoveOneInput {
  return { id: "" };
}

export const PermissionRemoveOneInput = {
  encode(message: PermissionRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: PermissionRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionRemoveOneInput>): PermissionRemoveOneInput {
    return PermissionRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionRemoveOneInput>): PermissionRemoveOneInput {
    const message = createBasePermissionRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePermissionRemoveWhereInput(): PermissionRemoveWhereInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "", action: "" };
}

export const PermissionRemoveWhereInput = {
  encode(message: PermissionRemoveWhereInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(34).string(message.permittedEntityId);
    }
    if (message.action !== "") {
      writer.uint32(42).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveWhereInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionRemoveWhereInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionRemoveWhereInput {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: PermissionRemoveWhereInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionRemoveWhereInput>): PermissionRemoveWhereInput {
    return PermissionRemoveWhereInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionRemoveWhereInput>): PermissionRemoveWhereInput {
    const message = createBasePermissionRemoveWhereInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionRemoveWhereManyInput(): PermissionRemoveWhereManyInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityIds: [], action: "" };
}

export const PermissionRemoveWhereManyInput = {
  encode(message: PermissionRemoveWhereManyInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    for (const v of message.permittedEntityIds) {
      writer.uint32(34).string(v!);
    }
    if (message.action !== "") {
      writer.uint32(42).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveWhereManyInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionRemoveWhereManyInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityIds.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionRemoveWhereManyInput {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityIds: Array.isArray(object?.permittedEntityIds)
        ? object.permittedEntityIds.map((e: any) => String(e))
        : [],
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: PermissionRemoveWhereManyInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityIds?.length) {
      obj.permittedEntityIds = message.permittedEntityIds;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionRemoveWhereManyInput>): PermissionRemoveWhereManyInput {
    return PermissionRemoveWhereManyInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionRemoveWhereManyInput>): PermissionRemoveWhereManyInput {
    const message = createBasePermissionRemoveWhereManyInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityIds = object.permittedEntityIds?.map((e) => e) || [];
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionFindByPermittedFilter(): PermissionFindByPermittedFilter {
  return { permittedEntity: "", permittedEntityId: "" };
}

export const PermissionFindByPermittedFilter = {
  encode(message: PermissionFindByPermittedFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permittedEntity !== "") {
      writer.uint32(50).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(58).string(message.permittedEntityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByPermittedFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          if (tag !== 50) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByPermittedFilter {
    return {
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
    };
  },

  toJSON(message: PermissionFindByPermittedFilter): unknown {
    const obj: any = {};
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionFindByPermittedFilter>): PermissionFindByPermittedFilter {
    return PermissionFindByPermittedFilter.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionFindByPermittedFilter>): PermissionFindByPermittedFilter {
    const message = createBasePermissionFindByPermittedFilter();
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    return message;
  },
};

function createBasePermissionFindByPermittedOpts(): PermissionFindByPermittedOpts {
  return { limit: 0, offset: 0 };
}

export const PermissionFindByPermittedOpts = {
  encode(message: PermissionFindByPermittedOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByPermittedOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByPermittedOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: PermissionFindByPermittedOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionFindByPermittedOpts>): PermissionFindByPermittedOpts {
    return PermissionFindByPermittedOpts.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionFindByPermittedOpts>): PermissionFindByPermittedOpts {
    const message = createBasePermissionFindByPermittedOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBasePermissionFindByPermittedInput(): PermissionFindByPermittedInput {
  return { filter: undefined, opts: undefined };
}

export const PermissionFindByPermittedInput = {
  encode(message: PermissionFindByPermittedInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      PermissionFindByPermittedFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      PermissionFindByPermittedOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByPermittedInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = PermissionFindByPermittedFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = PermissionFindByPermittedOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByPermittedInput {
    return {
      filter: isSet(object.filter) ? PermissionFindByPermittedFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? PermissionFindByPermittedOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: PermissionFindByPermittedInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = PermissionFindByPermittedFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = PermissionFindByPermittedOpts.toJSON(message.opts);
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionFindByPermittedInput>): PermissionFindByPermittedInput {
    return PermissionFindByPermittedInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionFindByPermittedInput>): PermissionFindByPermittedInput {
    const message = createBasePermissionFindByPermittedInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? PermissionFindByPermittedFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? PermissionFindByPermittedOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBasePermissionFindByPermittedResultMeta(): PermissionFindByPermittedResultMeta {
  return { offset: 0 };
}

export const PermissionFindByPermittedResultMeta = {
  encode(message: PermissionFindByPermittedResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByPermittedResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByPermittedResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: PermissionFindByPermittedResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionFindByPermittedResultMeta>): PermissionFindByPermittedResultMeta {
    return PermissionFindByPermittedResultMeta.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionFindByPermittedResultMeta>): PermissionFindByPermittedResultMeta {
    const message = createBasePermissionFindByPermittedResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBasePermissionFindByPermittedResult(): PermissionFindByPermittedResult {
  return { meta: undefined, results: [] };
}

export const PermissionFindByPermittedResult = {
  encode(message: PermissionFindByPermittedResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      PermissionFindByPermittedResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Permission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByPermittedResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = PermissionFindByPermittedResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(Permission.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByPermittedResult {
    return {
      meta: isSet(object.meta) ? PermissionFindByPermittedResultMeta.fromJSON(object.meta) : undefined,
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Permission.fromJSON(e)) : [],
    };
  },

  toJSON(message: PermissionFindByPermittedResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = PermissionFindByPermittedResultMeta.toJSON(message.meta);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => Permission.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionFindByPermittedResult>): PermissionFindByPermittedResult {
    return PermissionFindByPermittedResult.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionFindByPermittedResult>): PermissionFindByPermittedResult {
    const message = createBasePermissionFindByPermittedResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? PermissionFindByPermittedResultMeta.fromPartial(object.meta)
      : undefined;
    message.results = object.results?.map((e) => Permission.fromPartial(e)) || [];
    return message;
  },
};

function createBasePermissionFindByEntityFilter(): PermissionFindByEntityFilter {
  return { entity: "", entityId: "", action: "" };
}

export const PermissionFindByEntityFilter = {
  encode(message: PermissionFindByEntityFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(50).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(58).string(message.entityId);
    }
    if (message.action !== "") {
      writer.uint32(66).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByEntityFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByEntityFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          if (tag !== 50) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByEntityFilter {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: PermissionFindByEntityFilter): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionFindByEntityFilter>): PermissionFindByEntityFilter {
    return PermissionFindByEntityFilter.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionFindByEntityFilter>): PermissionFindByEntityFilter {
    const message = createBasePermissionFindByEntityFilter();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionFindByEntityOpts(): PermissionFindByEntityOpts {
  return { limit: 0, offset: 0 };
}

export const PermissionFindByEntityOpts = {
  encode(message: PermissionFindByEntityOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByEntityOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByEntityOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByEntityOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: PermissionFindByEntityOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionFindByEntityOpts>): PermissionFindByEntityOpts {
    return PermissionFindByEntityOpts.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionFindByEntityOpts>): PermissionFindByEntityOpts {
    const message = createBasePermissionFindByEntityOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBasePermissionFindByEntityInput(): PermissionFindByEntityInput {
  return { filter: undefined, opts: undefined };
}

export const PermissionFindByEntityInput = {
  encode(message: PermissionFindByEntityInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      PermissionFindByEntityFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      PermissionFindByEntityOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByEntityInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByEntityInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = PermissionFindByEntityFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = PermissionFindByEntityOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByEntityInput {
    return {
      filter: isSet(object.filter) ? PermissionFindByEntityFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? PermissionFindByEntityOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: PermissionFindByEntityInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = PermissionFindByEntityFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = PermissionFindByEntityOpts.toJSON(message.opts);
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionFindByEntityInput>): PermissionFindByEntityInput {
    return PermissionFindByEntityInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionFindByEntityInput>): PermissionFindByEntityInput {
    const message = createBasePermissionFindByEntityInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? PermissionFindByEntityFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? PermissionFindByEntityOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBasePermissionFindByEntityResultMeta(): PermissionFindByEntityResultMeta {
  return { offset: 0 };
}

export const PermissionFindByEntityResultMeta = {
  encode(message: PermissionFindByEntityResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByEntityResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByEntityResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByEntityResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: PermissionFindByEntityResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionFindByEntityResultMeta>): PermissionFindByEntityResultMeta {
    return PermissionFindByEntityResultMeta.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionFindByEntityResultMeta>): PermissionFindByEntityResultMeta {
    const message = createBasePermissionFindByEntityResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBasePermissionFindByEntityResult(): PermissionFindByEntityResult {
  return { meta: undefined, results: [] };
}

export const PermissionFindByEntityResult = {
  encode(message: PermissionFindByEntityResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      PermissionFindByEntityResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Permission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByEntityResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByEntityResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = PermissionFindByEntityResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(Permission.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByEntityResult {
    return {
      meta: isSet(object.meta) ? PermissionFindByEntityResultMeta.fromJSON(object.meta) : undefined,
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Permission.fromJSON(e)) : [],
    };
  },

  toJSON(message: PermissionFindByEntityResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = PermissionFindByEntityResultMeta.toJSON(message.meta);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => Permission.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionFindByEntityResult>): PermissionFindByEntityResult {
    return PermissionFindByEntityResult.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionFindByEntityResult>): PermissionFindByEntityResult {
    const message = createBasePermissionFindByEntityResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? PermissionFindByEntityResultMeta.fromPartial(object.meta)
      : undefined;
    message.results = object.results?.map((e) => Permission.fromPartial(e)) || [];
    return message;
  },
};

function createBasePermissionFindAllActionsFilter(): PermissionFindAllActionsFilter {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "" };
}

export const PermissionFindAllActionsFilter = {
  encode(message: PermissionFindAllActionsFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(34).string(message.permittedEntityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindAllActionsFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindAllActionsFilter {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
    };
  },

  toJSON(message: PermissionFindAllActionsFilter): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionFindAllActionsFilter>): PermissionFindAllActionsFilter {
    return PermissionFindAllActionsFilter.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionFindAllActionsFilter>): PermissionFindAllActionsFilter {
    const message = createBasePermissionFindAllActionsFilter();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    return message;
  },
};

function createBasePermissionFindAllActionsOpts(): PermissionFindAllActionsOpts {
  return { limit: 0, offset: 0 };
}

export const PermissionFindAllActionsOpts = {
  encode(message: PermissionFindAllActionsOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindAllActionsOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindAllActionsOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: PermissionFindAllActionsOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionFindAllActionsOpts>): PermissionFindAllActionsOpts {
    return PermissionFindAllActionsOpts.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionFindAllActionsOpts>): PermissionFindAllActionsOpts {
    const message = createBasePermissionFindAllActionsOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBasePermissionFindAllActionsInput(): PermissionFindAllActionsInput {
  return { filter: undefined, opts: undefined };
}

export const PermissionFindAllActionsInput = {
  encode(message: PermissionFindAllActionsInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      PermissionFindAllActionsFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      PermissionFindAllActionsOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindAllActionsInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = PermissionFindAllActionsFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = PermissionFindAllActionsOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindAllActionsInput {
    return {
      filter: isSet(object.filter) ? PermissionFindAllActionsFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? PermissionFindAllActionsOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: PermissionFindAllActionsInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = PermissionFindAllActionsFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = PermissionFindAllActionsOpts.toJSON(message.opts);
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionFindAllActionsInput>): PermissionFindAllActionsInput {
    return PermissionFindAllActionsInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionFindAllActionsInput>): PermissionFindAllActionsInput {
    const message = createBasePermissionFindAllActionsInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? PermissionFindAllActionsFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? PermissionFindAllActionsOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBasePermissionFindAllActionsResultMeta(): PermissionFindAllActionsResultMeta {
  return { offset: 0 };
}

export const PermissionFindAllActionsResultMeta = {
  encode(message: PermissionFindAllActionsResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindAllActionsResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindAllActionsResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: PermissionFindAllActionsResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionFindAllActionsResultMeta>): PermissionFindAllActionsResultMeta {
    return PermissionFindAllActionsResultMeta.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionFindAllActionsResultMeta>): PermissionFindAllActionsResultMeta {
    const message = createBasePermissionFindAllActionsResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBasePermissionFindAllActionsResult(): PermissionFindAllActionsResult {
  return { meta: undefined, results: [] };
}

export const PermissionFindAllActionsResult = {
  encode(message: PermissionFindAllActionsResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      PermissionFindAllActionsResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Permission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindAllActionsResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = PermissionFindAllActionsResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(Permission.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindAllActionsResult {
    return {
      meta: isSet(object.meta) ? PermissionFindAllActionsResultMeta.fromJSON(object.meta) : undefined,
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Permission.fromJSON(e)) : [],
    };
  },

  toJSON(message: PermissionFindAllActionsResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = PermissionFindAllActionsResultMeta.toJSON(message.meta);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => Permission.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionFindAllActionsResult>): PermissionFindAllActionsResult {
    return PermissionFindAllActionsResult.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionFindAllActionsResult>): PermissionFindAllActionsResult {
    const message = createBasePermissionFindAllActionsResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? PermissionFindAllActionsResultMeta.fromPartial(object.meta)
      : undefined;
    message.results = object.results?.map((e) => Permission.fromPartial(e)) || [];
    return message;
  },
};

function createBasePermissionRemoveAllActionsFilter(): PermissionRemoveAllActionsFilter {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "" };
}

export const PermissionRemoveAllActionsFilter = {
  encode(message: PermissionRemoveAllActionsFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(34).string(message.permittedEntityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveAllActionsFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionRemoveAllActionsFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionRemoveAllActionsFilter {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
    };
  },

  toJSON(message: PermissionRemoveAllActionsFilter): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionRemoveAllActionsFilter>): PermissionRemoveAllActionsFilter {
    return PermissionRemoveAllActionsFilter.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionRemoveAllActionsFilter>): PermissionRemoveAllActionsFilter {
    const message = createBasePermissionRemoveAllActionsFilter();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    return message;
  },
};

function createBasePermissionRemoveAllActionsInput(): PermissionRemoveAllActionsInput {
  return { filter: undefined };
}

export const PermissionRemoveAllActionsInput = {
  encode(message: PermissionRemoveAllActionsInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      PermissionRemoveAllActionsFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveAllActionsInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionRemoveAllActionsInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = PermissionRemoveAllActionsFilter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionRemoveAllActionsInput {
    return { filter: isSet(object.filter) ? PermissionRemoveAllActionsFilter.fromJSON(object.filter) : undefined };
  },

  toJSON(message: PermissionRemoveAllActionsInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = PermissionRemoveAllActionsFilter.toJSON(message.filter);
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionRemoveAllActionsInput>): PermissionRemoveAllActionsInput {
    return PermissionRemoveAllActionsInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PermissionRemoveAllActionsInput>): PermissionRemoveAllActionsInput {
    const message = createBasePermissionRemoveAllActionsInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? PermissionRemoveAllActionsFilter.fromPartial(object.filter)
      : undefined;
    return message;
  },
};

function createBaseUserFollowCreateOneInput(): UserFollowCreateOneInput {
  return { followerId: "", followeeId: "" };
}

export const UserFollowCreateOneInput = {
  encode(message: UserFollowCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.followerId !== "") {
      writer.uint32(10).string(message.followerId);
    }
    if (message.followeeId !== "") {
      writer.uint32(18).string(message.followeeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFollowCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFollowCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.followerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.followeeId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFollowCreateOneInput {
    return {
      followerId: isSet(object.followerId) ? String(object.followerId) : "",
      followeeId: isSet(object.followeeId) ? String(object.followeeId) : "",
    };
  },

  toJSON(message: UserFollowCreateOneInput): unknown {
    const obj: any = {};
    if (message.followerId !== "") {
      obj.followerId = message.followerId;
    }
    if (message.followeeId !== "") {
      obj.followeeId = message.followeeId;
    }
    return obj;
  },

  create(base?: DeepPartial<UserFollowCreateOneInput>): UserFollowCreateOneInput {
    return UserFollowCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserFollowCreateOneInput>): UserFollowCreateOneInput {
    const message = createBaseUserFollowCreateOneInput();
    message.followerId = object.followerId ?? "";
    message.followeeId = object.followeeId ?? "";
    return message;
  },
};

function createBaseUserFollowRemoveOneInput(): UserFollowRemoveOneInput {
  return { id: "" };
}

export const UserFollowRemoveOneInput = {
  encode(message: UserFollowRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFollowRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFollowRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFollowRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: UserFollowRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<UserFollowRemoveOneInput>): UserFollowRemoveOneInput {
    return UserFollowRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserFollowRemoveOneInput>): UserFollowRemoveOneInput {
    const message = createBaseUserFollowRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseUserFindFollowersFilter(): UserFindFollowersFilter {
  return { followeeId: "" };
}

export const UserFindFollowersFilter = {
  encode(message: UserFindFollowersFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.followeeId !== "") {
      writer.uint32(10).string(message.followeeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFollowersFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.followeeId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFollowersFilter {
    return { followeeId: isSet(object.followeeId) ? String(object.followeeId) : "" };
  },

  toJSON(message: UserFindFollowersFilter): unknown {
    const obj: any = {};
    if (message.followeeId !== "") {
      obj.followeeId = message.followeeId;
    }
    return obj;
  },

  create(base?: DeepPartial<UserFindFollowersFilter>): UserFindFollowersFilter {
    return UserFindFollowersFilter.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserFindFollowersFilter>): UserFindFollowersFilter {
    const message = createBaseUserFindFollowersFilter();
    message.followeeId = object.followeeId ?? "";
    return message;
  },
};

function createBaseUserFindFollowersOpts(): UserFindFollowersOpts {
  return { limit: 0, offset: 0 };
}

export const UserFindFollowersOpts = {
  encode(message: UserFindFollowersOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFollowersOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFollowersOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: UserFindFollowersOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create(base?: DeepPartial<UserFindFollowersOpts>): UserFindFollowersOpts {
    return UserFindFollowersOpts.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserFindFollowersOpts>): UserFindFollowersOpts {
    const message = createBaseUserFindFollowersOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseUserFindFollowersInput(): UserFindFollowersInput {
  return { filter: undefined, opts: undefined };
}

export const UserFindFollowersInput = {
  encode(message: UserFindFollowersInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      UserFindFollowersFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      UserFindFollowersOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFollowersInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = UserFindFollowersFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = UserFindFollowersOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFollowersInput {
    return {
      filter: isSet(object.filter) ? UserFindFollowersFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? UserFindFollowersOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: UserFindFollowersInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = UserFindFollowersFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = UserFindFollowersOpts.toJSON(message.opts);
    }
    return obj;
  },

  create(base?: DeepPartial<UserFindFollowersInput>): UserFindFollowersInput {
    return UserFindFollowersInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserFindFollowersInput>): UserFindFollowersInput {
    const message = createBaseUserFindFollowersInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? UserFindFollowersFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? UserFindFollowersOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseUserFindFollowersResultMeta(): UserFindFollowersResultMeta {
  return { offset: 0 };
}

export const UserFindFollowersResultMeta = {
  encode(message: UserFindFollowersResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFollowersResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFollowersResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: UserFindFollowersResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create(base?: DeepPartial<UserFindFollowersResultMeta>): UserFindFollowersResultMeta {
    return UserFindFollowersResultMeta.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserFindFollowersResultMeta>): UserFindFollowersResultMeta {
    const message = createBaseUserFindFollowersResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseUserFindFollowersResult(): UserFindFollowersResult {
  return { meta: undefined, followers: [] };
}

export const UserFindFollowersResult = {
  encode(message: UserFindFollowersResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      UserFindFollowersResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.followers) {
      Follower.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFollowersResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = UserFindFollowersResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.followers.push(Follower.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFollowersResult {
    return {
      meta: isSet(object.meta) ? UserFindFollowersResultMeta.fromJSON(object.meta) : undefined,
      followers: Array.isArray(object?.followers) ? object.followers.map((e: any) => Follower.fromJSON(e)) : [],
    };
  },

  toJSON(message: UserFindFollowersResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = UserFindFollowersResultMeta.toJSON(message.meta);
    }
    if (message.followers?.length) {
      obj.followers = message.followers.map((e) => Follower.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<UserFindFollowersResult>): UserFindFollowersResult {
    return UserFindFollowersResult.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserFindFollowersResult>): UserFindFollowersResult {
    const message = createBaseUserFindFollowersResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? UserFindFollowersResultMeta.fromPartial(object.meta)
      : undefined;
    message.followers = object.followers?.map((e) => Follower.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFollower(): Follower {
  return { id: "", createdAt: 0, updatedAt: 0, followeeId: "", followerId: "" };
}

export const Follower = {
  encode(message: Follower, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.followeeId !== "") {
      writer.uint32(34).string(message.followeeId);
    }
    if (message.followerId !== "") {
      writer.uint32(42).string(message.followerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Follower {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFollower();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.followeeId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.followerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Follower {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      followeeId: isSet(object.followeeId) ? String(object.followeeId) : "",
      followerId: isSet(object.followerId) ? String(object.followerId) : "",
    };
  },

  toJSON(message: Follower): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.followeeId !== "") {
      obj.followeeId = message.followeeId;
    }
    if (message.followerId !== "") {
      obj.followerId = message.followerId;
    }
    return obj;
  },

  create(base?: DeepPartial<Follower>): Follower {
    return Follower.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Follower>): Follower {
    const message = createBaseFollower();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.followeeId = object.followeeId ?? "";
    message.followerId = object.followerId ?? "";
    return message;
  },
};

function createBaseUserFindFolloweesFilter(): UserFindFolloweesFilter {
  return { followerId: "" };
}

export const UserFindFolloweesFilter = {
  encode(message: UserFindFolloweesFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.followerId !== "") {
      writer.uint32(10).string(message.followerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFolloweesFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.followerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFolloweesFilter {
    return { followerId: isSet(object.followerId) ? String(object.followerId) : "" };
  },

  toJSON(message: UserFindFolloweesFilter): unknown {
    const obj: any = {};
    if (message.followerId !== "") {
      obj.followerId = message.followerId;
    }
    return obj;
  },

  create(base?: DeepPartial<UserFindFolloweesFilter>): UserFindFolloweesFilter {
    return UserFindFolloweesFilter.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserFindFolloweesFilter>): UserFindFolloweesFilter {
    const message = createBaseUserFindFolloweesFilter();
    message.followerId = object.followerId ?? "";
    return message;
  },
};

function createBaseUserFindFolloweesOpts(): UserFindFolloweesOpts {
  return { limit: 0, offset: 0 };
}

export const UserFindFolloweesOpts = {
  encode(message: UserFindFolloweesOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFolloweesOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFolloweesOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: UserFindFolloweesOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create(base?: DeepPartial<UserFindFolloweesOpts>): UserFindFolloweesOpts {
    return UserFindFolloweesOpts.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserFindFolloweesOpts>): UserFindFolloweesOpts {
    const message = createBaseUserFindFolloweesOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseUserFindFolloweesInput(): UserFindFolloweesInput {
  return { filter: undefined, opts: undefined };
}

export const UserFindFolloweesInput = {
  encode(message: UserFindFolloweesInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      UserFindFolloweesFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      UserFindFolloweesOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFolloweesInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = UserFindFolloweesFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = UserFindFolloweesOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFolloweesInput {
    return {
      filter: isSet(object.filter) ? UserFindFolloweesFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? UserFindFolloweesOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: UserFindFolloweesInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = UserFindFolloweesFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = UserFindFolloweesOpts.toJSON(message.opts);
    }
    return obj;
  },

  create(base?: DeepPartial<UserFindFolloweesInput>): UserFindFolloweesInput {
    return UserFindFolloweesInput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserFindFolloweesInput>): UserFindFolloweesInput {
    const message = createBaseUserFindFolloweesInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? UserFindFolloweesFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? UserFindFolloweesOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseUserFindFolloweesResultMeta(): UserFindFolloweesResultMeta {
  return { offset: 0 };
}

export const UserFindFolloweesResultMeta = {
  encode(message: UserFindFolloweesResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFolloweesResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFolloweesResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: UserFindFolloweesResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create(base?: DeepPartial<UserFindFolloweesResultMeta>): UserFindFolloweesResultMeta {
    return UserFindFolloweesResultMeta.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserFindFolloweesResultMeta>): UserFindFolloweesResultMeta {
    const message = createBaseUserFindFolloweesResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseUserFindFolloweesResult(): UserFindFolloweesResult {
  return { meta: undefined, followees: [] };
}

export const UserFindFolloweesResult = {
  encode(message: UserFindFolloweesResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      UserFindFolloweesResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.followees) {
      Followee.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFolloweesResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = UserFindFolloweesResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.followees.push(Followee.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFolloweesResult {
    return {
      meta: isSet(object.meta) ? UserFindFolloweesResultMeta.fromJSON(object.meta) : undefined,
      followees: Array.isArray(object?.followees) ? object.followees.map((e: any) => Followee.fromJSON(e)) : [],
    };
  },

  toJSON(message: UserFindFolloweesResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = UserFindFolloweesResultMeta.toJSON(message.meta);
    }
    if (message.followees?.length) {
      obj.followees = message.followees.map((e) => Followee.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<UserFindFolloweesResult>): UserFindFolloweesResult {
    return UserFindFolloweesResult.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserFindFolloweesResult>): UserFindFolloweesResult {
    const message = createBaseUserFindFolloweesResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? UserFindFolloweesResultMeta.fromPartial(object.meta)
      : undefined;
    message.followees = object.followees?.map((e) => Followee.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFollowee(): Followee {
  return { id: "", createdAt: 0, updatedAt: 0, followerId: "", followeeId: "" };
}

export const Followee = {
  encode(message: Followee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.followerId !== "") {
      writer.uint32(34).string(message.followerId);
    }
    if (message.followeeId !== "") {
      writer.uint32(42).string(message.followeeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Followee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFollowee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.followerId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.followeeId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Followee {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      followerId: isSet(object.followerId) ? String(object.followerId) : "",
      followeeId: isSet(object.followeeId) ? String(object.followeeId) : "",
    };
  },

  toJSON(message: Followee): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.followerId !== "") {
      obj.followerId = message.followerId;
    }
    if (message.followeeId !== "") {
      obj.followeeId = message.followeeId;
    }
    return obj;
  },

  create(base?: DeepPartial<Followee>): Followee {
    return Followee.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Followee>): Followee {
    const message = createBaseFollowee();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.followerId = object.followerId ?? "";
    message.followeeId = object.followeeId ?? "";
    return message;
  },
};

function createBasePublishJobResult(): PublishJobResult {
  return { jobId: "" };
}

export const PublishJobResult = {
  encode(message: PublishJobResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishJobResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishJobResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jobId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublishJobResult {
    return { jobId: isSet(object.jobId) ? String(object.jobId) : "" };
  },

  toJSON(message: PublishJobResult): unknown {
    const obj: any = {};
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    return obj;
  },

  create(base?: DeepPartial<PublishJobResult>): PublishJobResult {
    return PublishJobResult.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PublishJobResult>): PublishJobResult {
    const message = createBasePublishJobResult();
    message.jobId = object.jobId ?? "";
    return message;
  },
};

function createBaseWorkersHealthCheckResult(): WorkersHealthCheckResult {
  return { ok: false };
}

export const WorkersHealthCheckResult = {
  encode(message: WorkersHealthCheckResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ok === true) {
      writer.uint32(8).bool(message.ok);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WorkersHealthCheckResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWorkersHealthCheckResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.ok = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WorkersHealthCheckResult {
    return { ok: isSet(object.ok) ? Boolean(object.ok) : false };
  },

  toJSON(message: WorkersHealthCheckResult): unknown {
    const obj: any = {};
    if (message.ok === true) {
      obj.ok = message.ok;
    }
    return obj;
  },

  create(base?: DeepPartial<WorkersHealthCheckResult>): WorkersHealthCheckResult {
    return WorkersHealthCheckResult.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<WorkersHealthCheckResult>): WorkersHealthCheckResult {
    const message = createBaseWorkersHealthCheckResult();
    message.ok = object.ok ?? false;
    return message;
  },
};

export type DummyServiceDefinition = typeof DummyServiceDefinition;
export const DummyServiceDefinition = {
  name: "DummyService",
  fullName: "main.DummyService",
  methods: {
    createOne: {
      name: "CreateOne",
      requestType: DummyCreateOneInput,
      requestStream: false,
      responseType: Dummy,
      responseStream: false,
      options: {},
    },
    updateOne: {
      name: "UpdateOne",
      requestType: DummyUpdateOneInput,
      requestStream: false,
      responseType: Dummy,
      responseStream: false,
      options: {},
    },
    findOne: {
      name: "FindOne",
      requestType: DummyFindOneInput,
      requestStream: false,
      responseType: Dummy,
      responseStream: false,
      options: {},
    },
    removeOne: {
      name: "RemoveOne",
      requestType: DummyRemoveOneInput,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    search: {
      name: "Search",
      requestType: DummySearchInput,
      requestStream: false,
      responseType: DummySearchResult,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface DummyServiceImplementation<CallContextExt = {}> {
  createOne(request: DummyCreateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Dummy>>;
  updateOne(request: DummyUpdateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Dummy>>;
  findOne(request: DummyFindOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Dummy>>;
  removeOne(request: DummyRemoveOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  search(request: DummySearchInput, context: CallContext & CallContextExt): Promise<DeepPartial<DummySearchResult>>;
}

export interface DummyServiceClient<CallOptionsExt = {}> {
  createOne(request: DeepPartial<DummyCreateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Dummy>;
  updateOne(request: DeepPartial<DummyUpdateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Dummy>;
  findOne(request: DeepPartial<DummyFindOneInput>, options?: CallOptions & CallOptionsExt): Promise<Dummy>;
  removeOne(request: DeepPartial<DummyRemoveOneInput>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  search(request: DeepPartial<DummySearchInput>, options?: CallOptions & CallOptionsExt): Promise<DummySearchResult>;
}

export type ProviderServiceDefinition = typeof ProviderServiceDefinition;
export const ProviderServiceDefinition = {
  name: "ProviderService",
  fullName: "main.ProviderService",
  methods: {
    createOne: {
      name: "CreateOne",
      requestType: ProviderCreateOneInput,
      requestStream: false,
      responseType: Provider,
      responseStream: false,
      options: {},
    },
    updateOne: {
      name: "UpdateOne",
      requestType: ProviderUpdateOneInput,
      requestStream: false,
      responseType: Provider,
      responseStream: false,
      options: {},
    },
    findOne: {
      name: "FindOne",
      requestType: ProviderFindOneInput,
      requestStream: false,
      responseType: Provider,
      responseStream: false,
      options: {},
    },
    findByUser: {
      name: "FindByUser",
      requestType: ProviderFindByUserInput,
      requestStream: false,
      responseType: Provider,
      responseStream: false,
      options: {},
    },
    findMe: {
      name: "FindMe",
      requestType: Empty,
      requestStream: false,
      responseType: Provider,
      responseStream: false,
      options: {},
    },
    removeOne: {
      name: "RemoveOne",
      requestType: ProviderRemoveOneInput,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    search: {
      name: "Search",
      requestType: ProviderSearchInput,
      requestStream: false,
      responseType: ProviderSearchResult,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ProviderServiceImplementation<CallContextExt = {}> {
  createOne(request: ProviderCreateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Provider>>;
  updateOne(request: ProviderUpdateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Provider>>;
  findOne(request: ProviderFindOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Provider>>;
  findByUser(request: ProviderFindByUserInput, context: CallContext & CallContextExt): Promise<DeepPartial<Provider>>;
  findMe(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<Provider>>;
  removeOne(request: ProviderRemoveOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  search(
    request: ProviderSearchInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ProviderSearchResult>>;
}

export interface ProviderServiceClient<CallOptionsExt = {}> {
  createOne(request: DeepPartial<ProviderCreateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Provider>;
  updateOne(request: DeepPartial<ProviderUpdateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Provider>;
  findOne(request: DeepPartial<ProviderFindOneInput>, options?: CallOptions & CallOptionsExt): Promise<Provider>;
  findByUser(request: DeepPartial<ProviderFindByUserInput>, options?: CallOptions & CallOptionsExt): Promise<Provider>;
  findMe(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<Provider>;
  removeOne(request: DeepPartial<ProviderRemoveOneInput>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  search(
    request: DeepPartial<ProviderSearchInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ProviderSearchResult>;
}

export type LoginServiceDefinition = typeof LoginServiceDefinition;
export const LoginServiceDefinition = {
  name: "LoginService",
  fullName: "main.LoginService",
  methods: {
    createOne: {
      name: "CreateOne",
      requestType: LoginCreateOneInput,
      requestStream: false,
      responseType: Login,
      responseStream: false,
      options: {},
    },
    findOne: {
      name: "FindOne",
      requestType: LoginFindOneInput,
      requestStream: false,
      responseType: Login,
      responseStream: false,
      options: {},
    },
    findWhere: {
      name: "FindWhere",
      requestType: LoginFindWhereInput,
      requestStream: false,
      responseType: Login,
      responseStream: false,
      options: {},
    },
    findByPlatformId: {
      name: "FindByPlatformId",
      requestType: LoginFindByPlatformIdInput,
      requestStream: false,
      responseType: Login,
      responseStream: false,
      options: {},
    },
    updateOne: {
      name: "UpdateOne",
      requestType: LoginUpdateOneInput,
      requestStream: false,
      responseType: Login,
      responseStream: false,
      options: {},
    },
    removeOne: {
      name: "RemoveOne",
      requestType: LoginRemoveOneInput,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface LoginServiceImplementation<CallContextExt = {}> {
  createOne(request: LoginCreateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Login>>;
  findOne(request: LoginFindOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Login>>;
  findWhere(request: LoginFindWhereInput, context: CallContext & CallContextExt): Promise<DeepPartial<Login>>;
  findByPlatformId(
    request: LoginFindByPlatformIdInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Login>>;
  updateOne(request: LoginUpdateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Login>>;
  removeOne(request: LoginRemoveOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
}

export interface LoginServiceClient<CallOptionsExt = {}> {
  createOne(request: DeepPartial<LoginCreateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Login>;
  findOne(request: DeepPartial<LoginFindOneInput>, options?: CallOptions & CallOptionsExt): Promise<Login>;
  findWhere(request: DeepPartial<LoginFindWhereInput>, options?: CallOptions & CallOptionsExt): Promise<Login>;
  findByPlatformId(
    request: DeepPartial<LoginFindByPlatformIdInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Login>;
  updateOne(request: DeepPartial<LoginUpdateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Login>;
  removeOne(request: DeepPartial<LoginRemoveOneInput>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
}

export type UserServiceDefinition = typeof UserServiceDefinition;
export const UserServiceDefinition = {
  name: "UserService",
  fullName: "main.UserService",
  methods: {
    createOne: {
      name: "CreateOne",
      requestType: UserCreateOneInput,
      requestStream: false,
      responseType: User,
      responseStream: false,
      options: {},
    },
    updateOne: {
      name: "UpdateOne",
      requestType: UserUpdateOneInput,
      requestStream: false,
      responseType: User,
      responseStream: false,
      options: {},
    },
    findOne: {
      name: "FindOne",
      requestType: UserFindOneInput,
      requestStream: false,
      responseType: User,
      responseStream: false,
      options: {},
    },
    findMe: {
      name: "FindMe",
      requestType: Empty,
      requestStream: false,
      responseType: User,
      responseStream: false,
      options: {},
    },
    removeOne: {
      name: "RemoveOne",
      requestType: UserRemoveOneInput,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    search: {
      name: "Search",
      requestType: UserSearchInput,
      requestStream: false,
      responseType: UserSearchResult,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface UserServiceImplementation<CallContextExt = {}> {
  createOne(request: UserCreateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<User>>;
  updateOne(request: UserUpdateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<User>>;
  findOne(request: UserFindOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<User>>;
  findMe(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<User>>;
  removeOne(request: UserRemoveOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  search(request: UserSearchInput, context: CallContext & CallContextExt): Promise<DeepPartial<UserSearchResult>>;
}

export interface UserServiceClient<CallOptionsExt = {}> {
  createOne(request: DeepPartial<UserCreateOneInput>, options?: CallOptions & CallOptionsExt): Promise<User>;
  updateOne(request: DeepPartial<UserUpdateOneInput>, options?: CallOptions & CallOptionsExt): Promise<User>;
  findOne(request: DeepPartial<UserFindOneInput>, options?: CallOptions & CallOptionsExt): Promise<User>;
  findMe(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<User>;
  removeOne(request: DeepPartial<UserRemoveOneInput>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  search(request: DeepPartial<UserSearchInput>, options?: CallOptions & CallOptionsExt): Promise<UserSearchResult>;
}

export type HealthServiceDefinition = typeof HealthServiceDefinition;
export const HealthServiceDefinition = {
  name: "HealthService",
  fullName: "main.HealthService",
  methods: {
    healthCheck: {
      name: "HealthCheck",
      requestType: Empty,
      requestStream: false,
      responseType: HealthCheckResult,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface HealthServiceImplementation<CallContextExt = {}> {
  healthCheck(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<HealthCheckResult>>;
}

export interface HealthServiceClient<CallOptionsExt = {}> {
  healthCheck(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<HealthCheckResult>;
}

export type ConversationServiceDefinition = typeof ConversationServiceDefinition;
export const ConversationServiceDefinition = {
  name: "ConversationService",
  fullName: "main.ConversationService",
  methods: {
    createOne: {
      name: "CreateOne",
      requestType: ConversationCreateOneInput,
      requestStream: false,
      responseType: Conversation,
      responseStream: false,
      options: {},
    },
    updateOne: {
      name: "UpdateOne",
      requestType: ConversationUpdateOneInput,
      requestStream: false,
      responseType: Conversation,
      responseStream: false,
      options: {},
    },
    findOne: {
      name: "FindOne",
      requestType: ConversationFindOneInput,
      requestStream: false,
      responseType: Conversation,
      responseStream: false,
      options: {},
    },
    removeOne: {
      name: "RemoveOne",
      requestType: ConversationRemoveOneInput,
      requestStream: false,
      responseType: Conversation,
      responseStream: false,
      options: {},
    },
    findByParticipant: {
      name: "FindByParticipant",
      requestType: ConversationFindByParticipantInput,
      requestStream: false,
      responseType: ConversationFindByParticipantResult,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ConversationServiceImplementation<CallContextExt = {}> {
  createOne(
    request: ConversationCreateOneInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Conversation>>;
  updateOne(
    request: ConversationUpdateOneInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Conversation>>;
  findOne(request: ConversationFindOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Conversation>>;
  removeOne(
    request: ConversationRemoveOneInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Conversation>>;
  findByParticipant(
    request: ConversationFindByParticipantInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ConversationFindByParticipantResult>>;
}

export interface ConversationServiceClient<CallOptionsExt = {}> {
  createOne(
    request: DeepPartial<ConversationCreateOneInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Conversation>;
  updateOne(
    request: DeepPartial<ConversationUpdateOneInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Conversation>;
  findOne(
    request: DeepPartial<ConversationFindOneInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Conversation>;
  removeOne(
    request: DeepPartial<ConversationRemoveOneInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Conversation>;
  findByParticipant(
    request: DeepPartial<ConversationFindByParticipantInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ConversationFindByParticipantResult>;
}

export type ConversationParticipantServiceDefinition = typeof ConversationParticipantServiceDefinition;
export const ConversationParticipantServiceDefinition = {
  name: "ConversationParticipantService",
  fullName: "main.ConversationParticipantService",
  methods: {
    createOne: {
      name: "CreateOne",
      requestType: ConversationParticipantCreateOneInput,
      requestStream: false,
      responseType: ConversationParticipant,
      responseStream: false,
      options: {},
    },
    findOne: {
      name: "FindOne",
      requestType: ConversationParticipantFindOneInput,
      requestStream: false,
      responseType: ConversationParticipant,
      responseStream: false,
      options: {},
    },
    removeOne: {
      name: "RemoveOne",
      requestType: ConversationParticipantRemoveOneInput,
      requestStream: false,
      responseType: ConversationParticipant,
      responseStream: false,
      options: {},
    },
    findByConversation: {
      name: "FindByConversation",
      requestType: ConversationParticipantFindByConversationInput,
      requestStream: false,
      responseType: ConversationParticipantFindByConversationResult,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ConversationParticipantServiceImplementation<CallContextExt = {}> {
  createOne(
    request: ConversationParticipantCreateOneInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ConversationParticipant>>;
  findOne(
    request: ConversationParticipantFindOneInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ConversationParticipant>>;
  removeOne(
    request: ConversationParticipantRemoveOneInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ConversationParticipant>>;
  findByConversation(
    request: ConversationParticipantFindByConversationInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ConversationParticipantFindByConversationResult>>;
}

export interface ConversationParticipantServiceClient<CallOptionsExt = {}> {
  createOne(
    request: DeepPartial<ConversationParticipantCreateOneInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ConversationParticipant>;
  findOne(
    request: DeepPartial<ConversationParticipantFindOneInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ConversationParticipant>;
  removeOne(
    request: DeepPartial<ConversationParticipantRemoveOneInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ConversationParticipant>;
  findByConversation(
    request: DeepPartial<ConversationParticipantFindByConversationInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ConversationParticipantFindByConversationResult>;
}

export type MessageServiceDefinition = typeof MessageServiceDefinition;
export const MessageServiceDefinition = {
  name: "MessageService",
  fullName: "main.MessageService",
  methods: {
    createOne: {
      name: "CreateOne",
      requestType: MessageCreateOneInput,
      requestStream: false,
      responseType: Message,
      responseStream: false,
      options: {},
    },
    updateOne: {
      name: "UpdateOne",
      requestType: MessageUpdateOneInput,
      requestStream: false,
      responseType: Message,
      responseStream: false,
      options: {},
    },
    findOne: {
      name: "FindOne",
      requestType: MessageFindOneInput,
      requestStream: false,
      responseType: Message,
      responseStream: false,
      options: {},
    },
    findUnique: {
      name: "FindUnique",
      requestType: MessageFindUniqueInput,
      requestStream: false,
      responseType: Message,
      responseStream: false,
      options: {},
    },
    removeOne: {
      name: "RemoveOne",
      requestType: MessageRemoveOneInput,
      requestStream: false,
      responseType: Message,
      responseStream: false,
      options: {},
    },
    findByConversation: {
      name: "FindByConversation",
      requestType: MessageFindByConversationInput,
      requestStream: false,
      responseType: MessageFindByConversationResult,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface MessageServiceImplementation<CallContextExt = {}> {
  createOne(request: MessageCreateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Message>>;
  updateOne(request: MessageUpdateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Message>>;
  findOne(request: MessageFindOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Message>>;
  findUnique(request: MessageFindUniqueInput, context: CallContext & CallContextExt): Promise<DeepPartial<Message>>;
  removeOne(request: MessageRemoveOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Message>>;
  findByConversation(
    request: MessageFindByConversationInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MessageFindByConversationResult>>;
}

export interface MessageServiceClient<CallOptionsExt = {}> {
  createOne(request: DeepPartial<MessageCreateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Message>;
  updateOne(request: DeepPartial<MessageUpdateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Message>;
  findOne(request: DeepPartial<MessageFindOneInput>, options?: CallOptions & CallOptionsExt): Promise<Message>;
  findUnique(request: DeepPartial<MessageFindUniqueInput>, options?: CallOptions & CallOptionsExt): Promise<Message>;
  removeOne(request: DeepPartial<MessageRemoveOneInput>, options?: CallOptions & CallOptionsExt): Promise<Message>;
  findByConversation(
    request: DeepPartial<MessageFindByConversationInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MessageFindByConversationResult>;
}

export type PermissionServiceDefinition = typeof PermissionServiceDefinition;
export const PermissionServiceDefinition = {
  name: "PermissionService",
  fullName: "main.PermissionService",
  methods: {
    createOne: {
      name: "CreateOne",
      requestType: PermissionCreateOneInput,
      requestStream: false,
      responseType: Permission,
      responseStream: false,
      options: {},
    },
    createMany: {
      name: "CreateMany",
      requestType: PermissionCreateManyInput,
      requestStream: false,
      responseType: Permissions,
      responseStream: false,
      options: {},
    },
    findOne: {
      name: "FindOne",
      requestType: PermissionFindOneInput,
      requestStream: false,
      responseType: Permission,
      responseStream: false,
      options: {},
    },
    findWhere: {
      name: "FindWhere",
      requestType: PermissionFindWhereInput,
      requestStream: false,
      responseType: Permission,
      responseStream: false,
      options: {},
    },
    findWhereMany: {
      name: "FindWhereMany",
      requestType: PermissionFindWhereManyInput,
      requestStream: false,
      responseType: Permissions,
      responseStream: false,
      options: {},
    },
    findWhereOrStar: {
      name: "FindWhereOrStar",
      requestType: PermissionFindWhereOrStarInput,
      requestStream: false,
      responseType: Permission,
      responseStream: false,
      options: {},
    },
    findByPermitted: {
      name: "FindByPermitted",
      requestType: PermissionFindByPermittedInput,
      requestStream: false,
      responseType: PermissionFindByPermittedResult,
      responseStream: false,
      options: {},
    },
    findByEntity: {
      name: "FindByEntity",
      requestType: PermissionFindByEntityInput,
      requestStream: false,
      responseType: PermissionFindByEntityResult,
      responseStream: false,
      options: {},
    },
    findAllActions: {
      name: "FindAllActions",
      requestType: PermissionFindAllActionsInput,
      requestStream: false,
      responseType: PermissionFindAllActionsResult,
      responseStream: false,
      options: {},
    },
    validateOne: {
      name: "ValidateOne",
      requestType: PermissionValidateOneInput,
      requestStream: false,
      responseType: PermissionValidateOneResult,
      responseStream: false,
      options: {},
    },
    removeOne: {
      name: "RemoveOne",
      requestType: PermissionRemoveOneInput,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    removeWhere: {
      name: "RemoveWhere",
      requestType: PermissionRemoveWhereInput,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    removeWhereMany: {
      name: "RemoveWhereMany",
      requestType: PermissionRemoveWhereManyInput,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    removeAllActions: {
      name: "RemoveAllActions",
      requestType: PermissionRemoveAllActionsInput,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface PermissionServiceImplementation<CallContextExt = {}> {
  createOne(request: PermissionCreateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Permission>>;
  createMany(
    request: PermissionCreateManyInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Permissions>>;
  findOne(request: PermissionFindOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Permission>>;
  findWhere(request: PermissionFindWhereInput, context: CallContext & CallContextExt): Promise<DeepPartial<Permission>>;
  findWhereMany(
    request: PermissionFindWhereManyInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Permissions>>;
  findWhereOrStar(
    request: PermissionFindWhereOrStarInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Permission>>;
  findByPermitted(
    request: PermissionFindByPermittedInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PermissionFindByPermittedResult>>;
  findByEntity(
    request: PermissionFindByEntityInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PermissionFindByEntityResult>>;
  findAllActions(
    request: PermissionFindAllActionsInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PermissionFindAllActionsResult>>;
  validateOne(
    request: PermissionValidateOneInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PermissionValidateOneResult>>;
  removeOne(request: PermissionRemoveOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  removeWhere(request: PermissionRemoveWhereInput, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  removeWhereMany(
    request: PermissionRemoveWhereManyInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Empty>>;
  removeAllActions(
    request: PermissionRemoveAllActionsInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Empty>>;
}

export interface PermissionServiceClient<CallOptionsExt = {}> {
  createOne(
    request: DeepPartial<PermissionCreateOneInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Permission>;
  createMany(
    request: DeepPartial<PermissionCreateManyInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Permissions>;
  findOne(request: DeepPartial<PermissionFindOneInput>, options?: CallOptions & CallOptionsExt): Promise<Permission>;
  findWhere(
    request: DeepPartial<PermissionFindWhereInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Permission>;
  findWhereMany(
    request: DeepPartial<PermissionFindWhereManyInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Permissions>;
  findWhereOrStar(
    request: DeepPartial<PermissionFindWhereOrStarInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Permission>;
  findByPermitted(
    request: DeepPartial<PermissionFindByPermittedInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PermissionFindByPermittedResult>;
  findByEntity(
    request: DeepPartial<PermissionFindByEntityInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PermissionFindByEntityResult>;
  findAllActions(
    request: DeepPartial<PermissionFindAllActionsInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PermissionFindAllActionsResult>;
  validateOne(
    request: DeepPartial<PermissionValidateOneInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PermissionValidateOneResult>;
  removeOne(request: DeepPartial<PermissionRemoveOneInput>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  removeWhere(request: DeepPartial<PermissionRemoveWhereInput>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  removeWhereMany(
    request: DeepPartial<PermissionRemoveWhereManyInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Empty>;
  removeAllActions(
    request: DeepPartial<PermissionRemoveAllActionsInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Empty>;
}

export type UserFollowServiceDefinition = typeof UserFollowServiceDefinition;
export const UserFollowServiceDefinition = {
  name: "UserFollowService",
  fullName: "main.UserFollowService",
  methods: {
    createOne: {
      name: "CreateOne",
      requestType: UserFollowCreateOneInput,
      requestStream: false,
      responseType: Follower,
      responseStream: false,
      options: {},
    },
    removeOne: {
      name: "RemoveOne",
      requestType: UserFollowRemoveOneInput,
      requestStream: false,
      responseType: Follower,
      responseStream: false,
      options: {},
    },
    findFollowers: {
      name: "FindFollowers",
      requestType: UserFindFollowersInput,
      requestStream: false,
      responseType: UserFindFollowersResult,
      responseStream: false,
      options: {},
    },
    findFollowees: {
      name: "FindFollowees",
      requestType: UserFindFolloweesInput,
      requestStream: false,
      responseType: UserFindFolloweesResult,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface UserFollowServiceImplementation<CallContextExt = {}> {
  createOne(request: UserFollowCreateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Follower>>;
  removeOne(request: UserFollowRemoveOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Follower>>;
  findFollowers(
    request: UserFindFollowersInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<UserFindFollowersResult>>;
  findFollowees(
    request: UserFindFolloweesInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<UserFindFolloweesResult>>;
}

export interface UserFollowServiceClient<CallOptionsExt = {}> {
  createOne(request: DeepPartial<UserFollowCreateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Follower>;
  removeOne(request: DeepPartial<UserFollowRemoveOneInput>, options?: CallOptions & CallOptionsExt): Promise<Follower>;
  findFollowers(
    request: DeepPartial<UserFindFollowersInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<UserFindFollowersResult>;
  findFollowees(
    request: DeepPartial<UserFindFolloweesInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<UserFindFolloweesResult>;
}

export type WorkersServiceDefinition = typeof WorkersServiceDefinition;
export const WorkersServiceDefinition = {
  name: "WorkersService",
  fullName: "main.WorkersService",
  methods: {
    publishJob: {
      name: "PublishJob",
      requestType: PublishJobInput,
      requestStream: false,
      responseType: PublishJobResult,
      responseStream: false,
      options: {},
    },
    healthCheck: {
      name: "HealthCheck",
      requestType: Empty,
      requestStream: false,
      responseType: WorkersHealthCheckResult,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface WorkersServiceImplementation<CallContextExt = {}> {
  publishJob(request: PublishJobInput, context: CallContext & CallContextExt): Promise<DeepPartial<PublishJobResult>>;
  healthCheck(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<WorkersHealthCheckResult>>;
}

export interface WorkersServiceClient<CallOptionsExt = {}> {
  publishJob(request: DeepPartial<PublishJobInput>, options?: CallOptions & CallOptionsExt): Promise<PublishJobResult>;
  healthCheck(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<WorkersHealthCheckResult>;
}

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

import { addDays } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import { MockMethod } from 'vite-plugin-mock';

import mockData from '../src/utils/mock-data';
import { resultSuccess } from './_util';

const now = new Date();

const columnIds = {
  column1: '8cd887ec-b3bc-11eb-8529-0242ac130003',
  column2: '23008a1f-ad94-4771-b85c-3566755afab7',
  column3: '37a9a747-f732-4587-a866-88d51c037641',
  column4: '4ac3cd37-b3e1-466a-8e3b-d7d88f6f5d4f'
};

const cardIds = {
  card1: 'deb02f04-9cf8-4f1e-97e0-2fbda84cc6b3',
  card2: '98bf6e8b-becc-485b-9c3f-a7d09392c48d',
  card3: '99fbc02c-de89-4be3-9515-f8bd12227d38',
  card4: 'ab9cebca-6cb4-4847-aa17-3b261b3dd0fb',
  card5: 'ebf0d26a-78e5-414f-986f-003d8fcd3154',
  card6: '9d98ce30-3c51-4de3-8537-7a4b663ee3af',
  card7: '0f71fb1f-9fce-419c-a525-46aeeb9b3e83',
  card8: '534fac32-cae1-4d77-965a-062d2114bc29',
  card9: 'dc0fa705-1740-46a4-a3ec-5c6d67b6f402',
  card10: '5b323625-c53b-4d06-86df-b59e180657a0'
};

const memberIds = {
  member1: '473d2720-341c-49bf-94ed-556999cf6ef7',
  member2: 'b8395203-887c-46f5-a85f-339b2d75c98b',
  member3: '048f6343-7a65-4873-a570-eb6ff4eb1ba3',
  member4: '18e23ac9-c874-43e4-8163-2d37f15f3367',
  member5: 'a3be5485-03bf-47a6-b553-a9cf9f070ed8'
};

const COMMENTS = [...Array(8)].map((_, index) => ({
  id: uuidv4(),
  avatar: mockData.image.avatar(index),
  name: mockData.name.fullName(index),
  createdAt: mockData.time(index),
  messageType: index === 3 || index === 5 ? 'image' : 'text',
  message:
    (index === 3 && mockData.image.feed(6)) ||
    (index === 5 && mockData.image.feed(8)) ||
    mockData.text.sentence(index)
}));
const cardList = [
  {
    id: cardIds.card1,
    name: '与HubSpot的销售人员通话',
    description:
      '湖水的两条支流上到处都是猫和种子，农夫也没有果实。两个，但是两个。他们会把它取下来，对自己的生命说，然后把它带走。因为你的蛋就像熔化的黄铜。至于愚昧人，就是猫的门，愚昧人的瘸子。Phasellus和fear iron，某种额外的弧度，你可以轻松地纠正它。今天，你需要的元素最多，但你需要的元素最多。Phasellus不是他们的调味品。果园泉水中的第一阵风把库拉的卧室摆在他面前。鱼是大象。停权.',
    assignee: [
      { id: memberIds.member1, avatar: mockData.image.avatar(1), name: mockData.name.fullName(1) }
    ],
    due: [addDays(now, 6).getTime(), addDays(now, 7).getTime()],
    attachments: [],
    comments: COMMENTS,
    completed: true
  },
  {
    id: cardIds.card2,
    name: 'Asis的采访。销售经理',
    description: '我们正在寻找vue的经验，当然还有丰富的知识',
    assignee: [
      { id: memberIds.member1, avatar: mockData.image.avatar(1), name: mockData.name.fullName(2) },
      { id: memberIds.member2, avatar: mockData.image.avatar(2), name: mockData.name.fullName(3) },
      { id: memberIds.member4, avatar: mockData.image.avatar(3), name: mockData.name.fullName(4) },
      { id: memberIds.member5, avatar: mockData.image.avatar(4), name: mockData.name.fullName(5) },
      { id: memberIds.member3, avatar: mockData.image.avatar(5), name: mockData.name.fullName(6) }
    ],
    due: [addDays(now, 6).getTime(), addDays(now, 7).getTime()],
    attachments: [mockData.image.feed(1)],
    comments: [],
    completed: false
  },
  {
    id: cardIds.card3,
    name: '更改顶部栏的高度，因为它看起来太粗了',
    description: '我们必须在定价上采取积极措施，因为收购我们符合他们的利益',
    assignee: [],
    due: [null, null],
    attachments: [],
    comments: [],
    completed: true
  },
  {
    id: cardIds.card4,
    name: '集成API',
    description: '我们必须在定价上采取强硬措施，因为收购我们符合他们的利益',
    assignee: [
      { id: memberIds.member2, avatar: mockData.image.avatar(2), name: mockData.name.fullName(7) },
      { id: memberIds.member5, avatar: mockData.image.avatar(5), name: mockData.name.fullName(8) }
    ],
    due: [null, null],
    attachments: [mockData.image.feed(3)],
    comments: [],
    completed: false
  },
  {
    id: cardIds.card5,
    name: '更新客户支付API',
    description: '我们需要在定价方面采取积极措施，因为收购我们符合他们的利益',
    assignee: [
      { id: memberIds.member1, avatar: mockData.image.avatar(1), name: mockData.name.fullName(9) }
    ],
    due: [null, null],
    attachments: [],
    comments: [],
    completed: true
  },
  {
    id: cardIds.card6,
    name: '最低释放量',
    description: '生产',
    assignee: [
      { id: memberIds.member1, avatar: mockData.image.avatar(1), name: mockData.name.fullName(10) }
    ],
    due: [null, null],
    attachments: [],
    comments: [],
    completed: true
  }
];

const columnList = [
  {
    id: columnIds.column1,
    name: '积压',
    cardIds: [cardIds.card1, cardIds.card2, cardIds.card3]
  },
  {
    id: columnIds.column2,
    name: '进度',
    cardIds: [cardIds.card4, cardIds.card5]
  },
  {
    id: columnIds.column3,
    name: 'Q&A',
    cardIds: []
  },
  {
    id: columnIds.column4,
    name: '生产',
    cardIds: [cardIds.card6]
  }
];

const board = {
  cards: cardList,
  columns: columnList,
  columnOrder: [columnIds.column1, columnIds.column2, columnIds.column3, columnIds.column4]
};

export default [
  {
    url: '/api/kanban/board',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess({ board });
    }
  },
  {
    url: '/api/kanban/columns/new',
    timeout: 1000,
    method: 'get',
    response: (params: any) => {
      const { name } = params.body;
      const column = {
        id: uuidv4(),
        name,
        cardIds: []
      };
      board.columns.push(column);
      board.columnOrder.push(column.id);
      return resultSuccess({ column });
    }
  },
  {
    url: '/api/kanban/columns/update',
    timeout: 1000,
    method: 'get',
    response: (params: any) => {
      const { columnId, updateColumn } = params.body;
      const columnIndex = board.columns.findIndex((column) => column.id === columnId);

      board.columns[columnIndex] = {
        ...board.columns[columnIndex],
        ...updateColumn
      };
      return resultSuccess({ olumn: board.columns[columnIndex] });
    }
  },
  {
    url: '/api/kanban/columns/delete',
    timeout: 1000,
    method: 'get',
    response: (params: any) => {
      const { columnId } = params.body;

      const column = board.columns.find((c) => c.id === columnId);

      if (column) {
        board.cards = board.cards.filter((card) => !column.cardIds.includes(card.id));
      }

      board.columns = board.columns.filter((id) => id !== columnId);
      board.columnOrder = board.columnOrder.filter((id) => id !== columnId);
      return resultSuccess({ columnId });
    }
  }
] as MockMethod[];

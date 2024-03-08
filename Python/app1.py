p1 = {'xp': 3976, 'level': 3}
p2 = {'xp': 1123, 'level': 1}
p3 = {'xp': 0}
player_db = [p1,p2,p3]

for p in player_db:
    # lvl = p['level']
    lvl = p.get('level',0)
    print(f'Level {lvl}')
